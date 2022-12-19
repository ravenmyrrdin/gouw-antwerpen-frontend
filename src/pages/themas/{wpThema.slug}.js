import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import Layout from "../../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../../styles.css"

const Thema = ({ data }) => {
  const thema = data?.wpThema
  const { themaBeschrijving, themaEMail, themaFoto, themaNaam, themaPersonen } =
    thema?.themasfieldgroup
  const image = getImage(themaFoto?.localFile)
  const personen = themaPersonen
  return (
    <Layout>
      <div className="profiel">
        <GatsbyImage className="profielFoto" image={image} alt={themaNaam} />
        <h1>{themaNaam}</h1>
        <div
          className="profielBeschrijving"
          dangerouslySetInnerHTML={{ __html: themaBeschrijving }}
        />
        <h2>Wie is er hier mee bezig</h2>
        <div className="flexButtons">
          {personen ? (
            personen?.map(persoon => {
              const { slug } = persoon
              const { naam } = persoon.gouwerFieldGroup
              return (
                <Link to={`/wie-is-wie/${slug}`} className="button">
                  {naam}
                </Link>
              )
            })
          ) : (
            <div>
              {" "}
              <h3>Er is hier jammer genoeg nog niemand voor</h3>{" "}
              <Link to={`mailto:buro@gouwantwerpen.be`} className="button">
                Kom jij ons hierbij helpen?
              </Link>
            </div>
          )}
        </div>
        <div className="flexButtons">
          <Link to={`mailto:${themaEMail}`} className="button2">
            Contact
          </Link>
          <Link to={`/themas`} className="button2">
            Terug
          </Link>
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String) {
    wpThema(slug: { eq: $slug }) {
      themasfieldgroup {
        themaBeschrijving
        themaEMail
        themaNaam
        themaPersonen {
          ... on WpGouwer {
            id
            slug
            gouwerFieldGroup {
              naam
            }
          }
        }
        themaFoto {
          localFile {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
      }
    }
  }
`

export default Thema

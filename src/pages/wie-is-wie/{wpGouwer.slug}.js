import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../../styles.css"

const Gouwer = ({ data }) => {
  const { wpGouwer } = data
  const { beschrijving, hobbies, naam, quote } = wpGouwer.gouwerFieldGroup
  const functieLijst = wpGouwer.functies.nodes
  const image = getImage(wpGouwer.gouwerFieldGroup.profielfoto?.localFile)
  const updatedFunctieLijst = functieLijst.filter((functie) => functie.name !== "Buro")
  return (
    <Layout>
      <div className="profiel">
        <h1>{naam}</h1>
        <p className="profielFunctie">
          {updatedFunctieLijst
            .map((functie, index) => { 
                if (index === updatedFunctieLijst.length - 1) {
                  return <span>{functie.name} </span>
                } else {
                  return <span>{functie.name} - </span>
                }
            })}
        </p>
        <GatsbyImage className="profielImage" image={image} alt={naam} />
        <div
          className="profielBeschrijving"
          dangerouslySetInnerHTML={{ __html: beschrijving }}
        />
        {hobbies && <h2>Hobbies</h2>}
        <p>{hobbies}</p>
        {quote && <h2>Favoriete Quote</h2>}
        <p className="profielQuote">{quote}</p>
        <Link className="button" to="/wie-is-wie">
          Terug naar overzicht
        </Link>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($slug: String!) {
    wpGouwer(slug: { eq: $slug }) {
      slug
      title
      gouwerFieldGroup {
        beschrijving
        hobbies
        naam
        quote
        profielfoto {
          localFile {
            childImageSharp {
              gatsbyImageData(placeholder: BLURRED)
            }
          }
        }
      }
      functies {
        nodes {
          name
        }
      }
    }
  }
`

export default Gouwer

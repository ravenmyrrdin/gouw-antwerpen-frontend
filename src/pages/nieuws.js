import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import "../styles.css"

const Nieuws = ({data}) => {
    const nieuws = data?.allWpNieuws.edges;
    return (
        <Layout>
        <div>
            <h1>Nieuws</h1>
            {nieuws?.reverse().map((nieuws) => {
                const { nieuwsfieldgroup } = nieuws.node;
                const { nieuwsAfbeelding, nieuwsBeschrijving, nieuwsTitel, inschrijvingslink, datum} = nieuwsfieldgroup;
                const image = getImage(nieuwsAfbeelding?.localFile);
                return (
                    <article className="nieuwsArticle">
                        <h3 className="nieuwsTitel">{datum} - {nieuwsTitel}</h3>
                        <GatsbyImage className="nieuwsImage" image={image} alt={nieuwsTitel} />
                        <div
                            className="nieuwsText"
                            dangerouslySetInnerHTML={{ __html: nieuwsBeschrijving }}
                            />
                        {inschrijvingslink && <a href="{inschrijvingslink}" className="nieuwsButton">Inschrijven</a>}
                    </article>
                )
            })
            }
        </div>
        </Layout>
    )
    }

export const query = graphql`
query {
    allWpNieuws {
      edges {
        node {
          nieuwsfieldgroup {
            nieuwsAfbeelding {
              localFile {
                childImageSharp {
                  gatsbyImageData
                }
              }
            }
            nieuwsBeschrijving
            nieuwsTitel
            inschrijvingslink
            datum
          }
        }
      }
    }
  }
  
  `;

export default Nieuws;
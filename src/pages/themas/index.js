import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../../styles.css";

const Themas = ({data}) => {
    const themas = data?.allWpThema.edges;
    console.log(themas);
    return (
        <Layout>
        <div>
            <h1>Thema's</h1>
            <div className="tegelBox">
                {themas?.map((thema) => {
                    const { slug } = thema.node;
                    const { themaFoto, themaNaam } = thema.node.themasfieldgroup;
                    const image = getImage(themaFoto?.localFile);
                    return (
                        <article classNaùe="tegelBoxArticle">
                            <GatsbyImage className="tegelImage" image={image} alt={themaNaam} />
                            <h3>{themaNaam}</h3>
                            <Link to={`/themas/${slug}`} className="button">Meer info</Link>
                        </article>
                    )
                })
                }
            </div>
        </div>
        </Layout>
    )
    }

export const query = graphql`
query {
    allWpThema {
      edges {
              node {
          themasfieldgroup {
          themaFoto {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        themaNaam
      }
      slug}
      }
    }
  }`;

export default Themas;
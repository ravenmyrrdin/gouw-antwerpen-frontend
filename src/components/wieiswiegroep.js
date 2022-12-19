import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import "../styles.css";
import { getImage, GatsbyImage } from "gatsby-plugin-image";

const WieIsWieGroep = ({filterTerm}) => {
    const query = useStaticQuery(graphql`
    query {
        allWpGouwer {
          edges {
            node {
              title
              gouwerFieldGroup {
                naam
                profielfoto {
                    localFile {
                      childImageSharp {
                        gatsbyImageData(placeholder: BLURRED)
                      }
                    }
                  }
              }
              slug
              functies {
                nodes {
                  name
                  slug
                }
              }
            }
          }
        }
      }
    `);
    const {allWpGouwer: {edges}} = query;
    return (
    <div class="tegelBox">
                    {edges.filter(({node})=> {
                        const slugArr = node.functies.nodes;
                        for (let i = 0; i < slugArr.length; i++) {
                            if (slugArr[i].slug.includes(filterTerm)) {
                                return true;
                            }
                        }
                    }).sort((a, b) => a - b).map(({ node }) => {
                        const { naam } = node.gouwerFieldGroup;
                        const functies = node.functies.nodes;
                        const image = getImage(node.gouwerFieldGroup.profielfoto.localFile)
                        return (
                            <article>
                                <GatsbyImage className="tegelImage" image={image} alt={naam} />
                                <h4 className="h3">{naam}</h4>
                                {functies.reverse().map((functie) => {
                                        if (functie.slug.includes(filterTerm)) {
                                            return (
                                                <p className="functieTag">{functie.name}<br/></p>
                                            )
                                        }
                                    })}
                                
                                    <Link to={`/wie-is-wie/${node.slug}`} className="button" >Lees meer</Link>
                            </article>
                        )
                    })}
                </div>
    )
}

export default WieIsWieGroep;
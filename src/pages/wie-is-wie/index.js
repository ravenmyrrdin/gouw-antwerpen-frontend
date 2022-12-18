import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../../components/layout"
import "../../styles.css"

const WieIsWie = () => {
    const data = useStaticQuery(graphql`
    query {
        allWpGouwer {
          edges {
            node {
              title
              gouwerFieldGroup {
                naam
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
    const {allWpGouwer: {edges}} = data;
    return (
        <Layout>
        <div>
            <h1>Wie is wie</h1>
            <section>
                <h2>Het Buro</h2>
                 {/** Filtering the edges array for the nodes that have a slug of "buro" and then mapping
                over the filtered array to return the name of the node.  */}
                <div class="tegelBox">
                    {edges.filter(({node})=> {
                        const slugArr = node.functies.nodes;
                        for (let i = 0; i < slugArr.length; i++) {
                            if (slugArr[i].slug === "buro") {
                                return true;
                            }
                        }
                    }).map(({ node }) => {
                        const { naam } = node.gouwerFieldGroup;
                        const functies = node.functies.nodes;
                        return (
                            <article>
                                <h3>{naam}</h3>
                                <p>
                                    {functies.reverse().map((functie) => {
                                        if (functie.slug !== "buro") {
                                            return (
                                                <span>{functie.name}<br/></span>
                                            )
                                        }
                                    })}
                                </p>
                                <Link to={`/wie-is-wie/${node.slug}`} className="button" >Lees meer</Link>
                            </article>
                        )
                    })}
                </div>
            </section>
            <section>
                <h2>De DC's</h2>
                <h3>District Hollebeek</h3>
            <div class="tegelBox">
                {edges.filter(({node})=> {
                        const slugArr = node.functies.nodes;
                        for (let i = 0; i < slugArr.length; i++) {
                            if (slugArr[i].slug.includes("hollebeek")) {
                                return true;
                            }
                        }
                    }).map(({ node }) => {
                        const { naam } = node.gouwerFieldGroup;
                        const functies = node.functies.nodes;
                        return (
                            <article>
                                <h4 className="h3">{naam}</h4>
                                <p>{functies.reverse().map((functie) => {
                                        if (functie.slug.includes("hollebeek")) {
                                            return (
                                                <span>{functie.name}<br/></span>
                                            )
                                        }
                                    })}
                                </p>
                                    <Link to={`/wie-is-wie/${node.slug}`} className="button" >Lees meer</Link>
                            </article>
                        )
                    })}
            </div>
            <h3>District Centrum</h3>
            <div class="tegelBox">
                {edges.filter(({node})=> {
                        const slugArr = node.functies.nodes;
                        for (let i = 0; i < slugArr.length; i++) {
                            if (slugArr[i].slug.includes("centrum")) {
                                return true;
                            }
                        }
                    }).map(({ node }) => {
                        const { naam } = node.gouwerFieldGroup;
                        const functies = node.functies.nodes;
                        return (
                            <article>
                                <h4 className="h3">{naam}</h4>
                                <p>{functies.reverse().map((functie) => {
                                        if (functie.slug.includes("centrum")) {
                                            return (
                                                <span>{functie.name}<br/></span>
                                            )
                                        }
                                    })}
                                </p>
                                    <Link to={`/wie-is-wie/${node.slug}`} className="button" >Lees meer</Link>
                            </article>
                        )
                    })}
            </div>
            <h3>District Ter Schelde</h3>
            <div class="tegelBox">
                {edges.filter(({node})=> {
                        const slugArr = node.functies.nodes;
                        for (let i = 0; i < slugArr.length; i++) {
                            if (slugArr[i].slug.includes("ter-schelde")) {
                                return true;
                            }
                        }
                    }).map(({ node }) => {
                        const { naam } = node.gouwerFieldGroup;
                        const functies = node.functies.nodes;
                        return (
                            <article>
                                <h4 className="h3">{naam}</h4>
                                <p>{functies.reverse().map((functie) => {
                                        if (functie.slug.includes("ter-schelde")) {
                                            return (
                                                <span>{functie.name}<br/></span>
                                            )
                                        }
                                    })}
                                </p>
                                    <Link to={`/wie-is-wie/${node.slug}`} className="button" >Lees meer</Link>
                            </article>
                        )
                    })}
            </div>
            <h3>District West</h3>
            <div class="tegelBox">
                {edges.filter(({node})=> {
                        const slugArr = node.functies.nodes;
                        for (let i = 0; i < slugArr.length; i++) {
                            if (slugArr[i].slug.includes("west")) {
                                return true;
                            }
                        }
                    }).map(({ node }) => {
                        const { naam } = node.gouwerFieldGroup; 
                        const functies = node.functies.nodes;
                        return (
                            <article>
                                <h4 className="h3">{naam}</h4>
                                <p>{functies.reverse().map((functie) => {
                                        if (functie.slug.includes("west")) {
                                            return (
                                                <span>{functie.name}<br/></span>
                                            )
                                        }
                                    })}
                                </p>
                                    <Link to={`/wie-is-wie/${node.slug}`} className="button" >Lees meer</Link>
                            </article>
                        )
                    })}
            </div>
            <h3>District Zilverbeek</h3>
            <div class="tegelBox">
                {edges.filter(({node})=> {
                        const slugArr = node.functies.nodes;
                        for (let i = 0; i < slugArr.length; i++) {
                            if (slugArr[i].slug.includes("zilverbeek")) {
                                return true;
                            }
                        }
                    }).map(({ node }) => {
                        const { naam } = node.gouwerFieldGroup;
                        const functies = node.functies.nodes;
                        return (
                            <article>
                                <h4 className="h3">{naam}</h4>
                                <p>{functies.reverse().map((functie) => {
                                        if (functie.slug.includes("zilverbeek")) {
                                            return (
                                                <span>{functie.name}<br/></span>
                                            )
                                        }
                                    })}
                                </p>
                                    <Link to={`/wie-is-wie/${node.slug}`} className="button" >Lees meer</Link>
                            </article>
                        )
                    })}
            </div>
            </section>
            <section>
                <h2>de A-functies</h2>
                <div class="tegelBox">
                    {edges.filter(({node})=> {
                        const slugArr = node.functies.nodes;
                        for (let i = 0; i < slugArr.length; i++) {
                            if (slugArr[i].slug.substring(0, 1) === "a" && slugArr[i].slug.substring(0, 2) !== "ad") {
                                return true;
                            }
                        }
                    }).sort((a, b) => a - b).map(({ node }) => {
                        const { naam } = node.gouwerFieldGroup;
                        const functies = node.functies.nodes;
                        return (
                            <article>
                                <h4 className="h3">{naam}</h4>
                                <p>{functies.reverse().map((functie) => {
                                        if (functie.slug.substring(0, 1) === "a" && functie.slug.substring(0, 2) !== "ad") {
                                            return (
                                                <span>{functie.name}<br/></span>
                                            )
                                        }
                                    })}
                                </p>
                                    <Link to={`/wie-is-wie/${node.slug}`} className="button" >Lees meer</Link>
                            </article>
                        )
                    })}
                </div>
            </section>
        </div>
        </Layout>
    )
    }


export default WieIsWie;

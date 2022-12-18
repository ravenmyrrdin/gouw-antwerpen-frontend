import React from "react";
import { graphql, Link } from "gatsby";
import Layout from "../../components/layout";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import "../../styles.css";

const Gouwer = ({ data }) => {
    const { wpGouwer } = data;
    const { beschrijving, hobbies, naam, quote } = wpGouwer.gouwerFieldGroup;
    return (
        <Layout>
        <div>
            <h1>{naam}</h1>
            <p>{beschrijving}</p>
            <p>{hobbies}</p>
            <p>{quote}</p>
            <Link className="button" to="/wie-is-wie">Terug naar overzicht</Link>
        </div>
        </Layout>
    )
    }

export const query = graphql`
query ($slug: String!) {
    wpGouwer(slug: {eq: $slug}) {
      slug
      title
      gouwerFieldGroup {
        beschrijving
        hobbies
        naam
        quote
      }
    }
  }
`;

export default Gouwer;


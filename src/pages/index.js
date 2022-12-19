import * as React from "react"
import { Link, graphql } from "gatsby"
import { getImage, StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import "../styles.css"

const Homepage = ({data}) => {
  const homepage = data.wpPage.homepage;
  const { homepageTitle, homepageDescription } = homepage;
  const image = getImage(homepage.homepagePicture.localFile);
  return (
    <Layout>
      <div>
        <div>
          <StaticImage className="homepageBgImage" src="../images/stad_antwerpen.jpg" alt="Stad Antwerpen Grote Markt" />
        </div>
        <div>
          <h1>{homepageTitle}</h1>
          <p>
            {homepageDescription}
          </p>
        </div>
        </div>
    </Layout>)}

export const query = graphql`
query {
  wpPage {
    homepage {
      homepageDescription
      homepageTitle
      homepagePicture {
        localFile {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
}

`;

export default Homepage

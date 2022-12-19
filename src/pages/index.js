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
        <div className="homepageBgImage">
          </div>
        <div className="overlay">
          <div className="homepageLogoContainer">
            <StaticImage className="homepageLogo" src="../images/wit_logo_gouw_antwerpen.png" alt="Logo gouw antwerpen"/>
          </div>
            <div className="overlayBody">
              <div className="overlayBodyContent">
                <h1>{homepageTitle}</h1>
                <p>
                  {homepageDescription}
                </p>
                <div className="overlayBodyContentIframe">
                  <iframe src="https://www.google.com/maps/d/embed?mid=1lKEY2M88_awXv6TT9WkW1C47Vq_n_2w&ehbc=2E312F" width="400" height="300"></iframe>
                </div>
              </div>
            </div>
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

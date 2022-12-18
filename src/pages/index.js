import * as React from "react"
import { Link, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const Homepage = () => {
  return (
    <Layout>
      <div>
        <h1>Welkom op de website van de Vrienden van de St. Jozefkerk</h1>
        <p>
          De Vrienden van de St. Jozefkerk is een vereniging die zich inzet voor
          de St. Jozefkerk in het centrum van Oosterhout. De vereniging is opgericht
          in 1992 en heeft als doel het behoud en de instandhouding van de
          St. Jozefkerk en de bijbehorende gebouwen. De vereniging heeft een
          bestuur en een aantal commissies die zich bezighouden met de
          activiteiten van de vereniging.
        </p>
        <p>
          De St. Jozefkerk is een kerkgebouw in de Nederlandse plaats Oosterhout.
          Het is een rooms-katholieke kerk, gewijd aan de heilige Jozef. Het
          gebouw is een rijksmonument en is gebouwd in de periode 1902-1904 naar
          een ontwerp van de architecten J. van der Velden en J. van der Velden jr.
          Het gebouw is een voorbeeld van de neogotische stijl.
        </p>
        </div>
    </Layout>)}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`;

export default Homepage

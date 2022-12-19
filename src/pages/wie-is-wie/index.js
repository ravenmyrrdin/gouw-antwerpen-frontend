import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import Layout from "../../components/layout"
import "../../styles.css"
import WieIsWieGroep from "../../components/wieiswiegroep"

const WieIsWie = () => {
  return (
    <Layout>
      <div>
        <h1>Wie is wie</h1>
        <section>
          <h2>Het Buro</h2>
          <WieIsWieGroep filterTerm="gouw"/>
        </section>
        <section>
          <h2>De DC's</h2>
          <h3>District Hollebeek</h3>
          <WieIsWieGroep filterTerm="hollebeek" />
          <h3>District Centrum</h3>
          <WieIsWieGroep filterTerm="centrum" />
          <h3>District Ter Schelde</h3>
          <WieIsWieGroep filterTerm="ter-schelde" />
          <h3>District West</h3>
          <WieIsWieGroep filterTerm="west" />
          <h3>District Zilverbeek</h3>
          <WieIsWieGroep filterTerm="zilverbeek" />
        </section>
        <section>
          <h2>De A-functies</h2>
          <h3>AGC</h3>
          <WieIsWieGroep filterTerm="agc" />
          <h3>AGB</h3>
          <WieIsWieGroep filterTerm="agb" />
          <h3>AGV</h3>
          <WieIsWieGroep filterTerm="agv" />
        </section>
      </div>
    </Layout>
  )
}

export default WieIsWie

import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../styles.css"
import { StaticImage } from "gatsby-plugin-image"
import Contact from "./contactElement"
import ContactElement from "./contactElement"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <nav className="navBarContainer">
          <div className="navBar">
            <Link className="navItem" activeClassName="navSelected" to="/">Home</Link>
            <Link className="navItem" activeClassName="navSelected" to="/nieuws">Nieuws</Link>
            <Link className="navItem" activeClassName="navSelected" partiallyActive="navSelected" to="/wie-is-wie">Wie is wie</Link>
            <Link className="navItem" activeClassName="navSelected" partiallyActive="navSelected" to="/themas">Thema's</Link>
            <Link className="navItem" activeClassName="navSelected" to="/contact">Contact</Link>
            <Link className="navItem" activeClassName="navSelected" to="/privacy">Privacy</Link>
          </div>
        </nav>
        <main className="content">
          {children}
          </main>
        <footer className="footer">
          <div className="content">
            <div className="footerGrid">
              <div className="copyRightBox">
                © {new Date().getFullYear()} &middot; Gemaakt door
                {` `}
                <Link className="copyRightBoxLink" to="/wie-is-wie/raven-van-hove">Raven</Link>
                <div className="footerLogos">
                  <Link to="/">
                    <StaticImage className="footerLogo" src="../images/wit_logo_gouw_antwerpen.png" alt="Logo" />
                  </Link>
                  <a href="https://www.scoutsengidsenvlaanderen.be">
                    <StaticImage className="footerLogo" src="../images/wit_logo_scoutsgidsenvl.png" alt="Logo" />
                  </a>
                </div>
              </div>
              <ContactElement/>
            </div>
          </div>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

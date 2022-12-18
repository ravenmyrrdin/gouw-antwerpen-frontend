import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../styles.css"

const Layout = ({ children }) => {
  return (
    <>
      <div>
        <nav className="navBar">
          <Link className="navItem" to="/">Home</Link>
          <Link className="navItem" to="/nieuws">Nieuws</Link>
          <Link className="navItem" to="/wie-is-wie">Wie is wie</Link>
          <Link className="navItem" to="/themas">Themas</Link>
          <Link className="navItem" to="/contact">Contact</Link>
        </nav>
        <main className="content">
          {children}
          </main>
        <footer className="footer">
          <div className="content">
            © {new Date().getFullYear()} &middot; Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
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

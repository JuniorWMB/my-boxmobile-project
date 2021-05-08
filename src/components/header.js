import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { FaBars } from "react-icons/fa"
import { Link } from "gatsby"
import "../pages/style.css"

const Header = ({ siteTitle }) => (
  <header className="header__contain">
    <div className="header__logo">
      <StaticImage
        className="test"
        src="../images/logo.png"
        width={100}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="logo myboxmobile"
        style={
          {
            // marginBottom: `1.45rem`,
          }
        }
      />
      <div className="menu__header">
        <FaBars className="menu" />
      </div>
      <div className="headernav_right">
        <Link to="/">Accueil |</Link>
        <Link to="/box-mobile/"> Le box mobile c'est quoi ? |</Link>
        {/* <Link to="/nos-services/"> Nos services |</Link> */}
        <Link to="/contact/"> Contact |</Link>
        <Link to="/volume/"> Calculateur de volume</Link>
        <Link
          style={{
            height: "50px",
            width: "100px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "purple",
            borderRadius: ".3rem",
            color: "#fff",
            marginLeft: ".5rem",
            cursor: "pointer",
          }}
        >
          Devis
        </Link>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { FcMenu } from "react-icons/fc"
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
        <FcMenu className="menu" />
      </div>
    </div>
    <div className="headernav_right">
      <h5>Accueil |</h5>
      <h5> La box mobile c'est quoi ? |</h5>
      <h5> Nos service |</h5>
      <h5> Calculateur de volume</h5>
      <h5
        style={{
          height: "50px",
          width: "100px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "purple",
          borderRadius: ".3rem",
          color: "#fff",
        }}
      >
        Devis
      </h5>
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

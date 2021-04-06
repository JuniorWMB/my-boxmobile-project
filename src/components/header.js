import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../pages/style.css"

const Header = ({ siteTitle }) => (
  <header className="header__contain">
    <div>
      <h1>
        <Link style={{ color: "#000" }} to="/">
          {siteTitle}
        </Link>
      </h1>
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

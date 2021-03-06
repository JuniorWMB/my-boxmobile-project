import * as React from "react"
import PropTypes from "prop-types"
import { StaticImage } from "gatsby-plugin-image"
import { FaBars } from "react-icons/fa"
import { Link } from "gatsby"
import { FcHome, FcQuestions, FcCellPhone, FcCalculator } from "react-icons/fc"
import { AiOutlineClose } from "react-icons/ai"
import "../pages/style.css"
import { useState } from "react"

const Header = ({ siteTitle }) => {
  const [show, setShow] = useState(false)
  return (
    <header className="header__contain">
      <div className={show ? "showMenu" : "hiddenmenu"}>
        <div className="svgcontain">
          <Link>
            <AiOutlineClose onClick={() => setShow(!show)} />
          </Link>
          <Link to="/">
            <FcHome />
          </Link>
          <Link to="/box-mobile/">
            <FcQuestions />
          </Link>
          <Link to="/contact/">
            <FcCellPhone />
          </Link>
          <Link to="/volume/">
            <FcCalculator />
          </Link>
          <Link>
            <h5>Devis</h5>
          </Link>
        </div>
      </div>
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
          <FaBars className="menu" onClick={() => setShow(!show)} />
        </div>
        <div className="headernav_right">
          <Link to="/" className="hvr-underline-from-left">
            Accueil |
          </Link>
          <Link to="/box-mobile/" className="hvr-underline-from-left">
            {" "}
            Le box mobile c'est quoi ? |
          </Link>
          {/* <Link to="/nos-services/"> Nos services |</Link> */}
          <Link to="/contact/" className="hvr-underline-from-left">
            {" "}
            Contact |
          </Link>
          <Link to="/volume/" className="hvr-underline-from-left">
            {" "}
            Calculateur de volume
          </Link>
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
            className="hvr-underline-from-left"
          >
            Devis
          </Link>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"
import { StaticImage } from "gatsby-plugin-image"
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={
          {
            // padding: "0 1rem",
            // margin: `0 auto`,
            // maxWidth: 1960,
            // padding: `0 1.0875rem 1.45rem`,
          }
        }
      >
        <main>{children}</main>
        <footer>
          <div className="footer__master">
            <div className="mentionLegales one__block">
              <div className="presta">
                <h2 style={{ marginTop: "1rem" }}>Nos prestations</h2>
                <p>Particuliers</p>
                <p>Professionnels</p>
                <p>Location d'espace de stockage</p>
                <p>Stockage déménagement</p>
              </div>
              <div className="mentionLegales">
                <div className="presta">
                  <h2 style={{ marginTop: "1rem" }}>Combien ça coute</h2>
                  <p>Tarif garde meuble</p>
                  <p>Garde meuble pas cher</p>
                  <p>Demander un devis</p>
                </div>
              </div>
            </div>

            <div className="mentionLegales two__block">
              <div className="presta">
                <h2 style={{ marginTop: "1rem" }}>Trouver votre centre</h2>
                <p>Test 1</p>
                <p>Test 2</p>
              </div>
              <div className="mentionLegales">
                <div className="presta prestaOne">
                  <h2 style={{ marginTop: "1rem" }}>
                    {" "}
                    Aide & Mentions légales
                  </h2>
                  <p>Calculateur de volume</p>
                  <p>CGV</p>
                  <p>Politique de confidentialité</p>
                </div>
              </div>
            </div>

            <div className="mentionLegales two__block">
              <div className="presta">
                <h2 style={{ marginTop: "1rem" }}>A propos de My BoxMobile</h2>
                <p>Nous contacter</p>
                <p>Notre équipe</p>
                <p>Nos partenaires</p>
              </div>
              <div className="mentionLegales">
                <div className="presta reseaumaster">
                  <h2 style={{ marginTop: "1rem" }}> Nos reseaux</h2>
                  <AiFillFacebook className="reseau" />
                  <AiFillInstagram className="reseau" />
                  <AiFillYoutube className="reseau" />
                  <AiFillTwitterSquare className="reseau" />
                  <AiFillLinkedin className="reseau" />
                </div>
              </div>
            </div>

            <div className="mentionLegales mentionfinal three__block">
              <div style={{ marginTop: "1rem" }} className="footer__textsocial">
                <StaticImage
                  className="test"
                  src="../images/logo.png"
                  width={200}
                  quality={95}
                  formats={["AUTO", "WEBP", "AVIF"]}
                  alt="logo myboxmobile"
                  style={
                    {
                      // marginBottom: `1.45rem`,
                    }
                  }
                />
                <p>Siège social</p>
                <p> 17 allée Fernand Léger</p>
                <p>91270 Vigneux-sur-Seine</p>
              </div>
              <div className="footer__horaire">
                <a href="Contact@myboxmobile.fr ">Contact@myboxmobile.fr</a>
                <p>0783062424 / 0677837697</p>
              </div>
            </div>
            {/*           
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a> */}
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

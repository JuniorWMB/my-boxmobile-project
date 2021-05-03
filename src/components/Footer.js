import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillYoutube,
  AiFillTwitterSquare,
  AiFillLinkedin,
} from "react-icons/ai"

const Footer = () => {
  return (
    <div className="headernav_right">
      <div className="footer__blocktext">
        <div className="presta">
          <h2>Nos prestations</h2>
          <p>Particuliers</p>
          <p>Professionnels</p>
          <p>Location d'espace de stockage</p>
          <p>Stockage déménagement</p>
        </div>
        <div className="how__many">
          <div className="presta">
            <h2>Combien ça coute</h2>
            <p>Tarif garde meuble</p>
            <p>Garde meuble pas cher</p>
            <p>Demander un deis</p>
          </div>
        </div>
      </div>

      <div className="footer__blocktext">
        <div className="presta">
          <h2>Trouver votre centre</h2>
          <p>Test 1</p>
          <p>Test 2</p>
        </div>
        <div className="mentionLegales">
          <div className="presta">
            <h2> Aide & Mentions légales</h2>
            <p>Calculateur de volume</p>
            <p>CGV</p>
            <p>Politique de confidentialité</p>
          </div>
        </div>
      </div>

      <div className="footer__blocktext">
        <div className="presta">
          <h2>A propos de My BoxMobile</h2>
          <p>Nous contacter</p>
          <p>Notre équipe</p>
          <p>Nos partenaires</p>
        </div>
        <div className="mentionLegales">
          <div className="presta">
            <h2> Nos reseaux</h2>
            <AiFillFacebook />
            <AiFillInstagram />
            <AiFillYoutube />
            <AiFillTwitterSquare />
            <AiFillLinkedin />
          </div>
        </div>
      </div>

      <div className="footer__blocktext">
        <div className="footer__textsocial">
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
          <p>Siège social</p>
          <p></p>
          <p></p>
          <p></p>
        </div>
        <div className="footer__horaire">
          <p>Horaire: du Lundi au Vendredi</p>
          <p>09h00 - 18h00</p>
        </div>
      </div>
      {/* <div className="footer__blockOne">
        <div className="presta">
          <h2>Nos prestations</h2>
          <p>Particuliers</p>
          <p>Professionnels</p>
          <p>Location d'espace de stockage</p>
          <p>Stockage déménagement</p>
        </div>
        <div className="how__many">
          <div className="presta">
            <h2>Combien ça coute</h2>
            <p>Tarif garde meuble</p>
            <p>Garde meuble pas cher</p>
            <p>Demander un deis</p>
          </div>
        </div>
      </div>

      <div className="footer__blockTwo">
        <div className="presta">
          <h2>Trouver votre centre</h2>
          <p>Test 1</p>
          <p>Test 2</p>
        </div>
        <div className="mentionLegales">
          <div className="mention">
            <h2> Aide & Mentions légales</h2>
            <p>Calculateur de volume</p>
            <p>CGV</p>
            <p>Politique de confidentialité</p>
          </div>
        </div>
      </div> */}
    </div>
  )
}

export default Footer

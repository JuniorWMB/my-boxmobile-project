import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { useStaticQuery, graphql } from "gatsby"

const SecondBlockHome = () => {
  return (
    <div className="secondBlockHome__contain">
      <div className="secondBlockHome__block">
        <p>
          Dans un premier temps ,il faut choisir votre taille de box ( 4 m3 ou 8
          m3.
          <br />
          <br /> Ensuite 3 possibilités :
        </p>
      </div>
      <div className="secondBlockHome__block">
        <p>
          <p>1</p>
          Vous ramener directement vos effets personnels dans l'un de nos
          dépôts.
        </p>
        <StaticImage
          src="../../images/seven.png"
          width={500}
          alt="test"
          placeholder="blurred"
          quality="90"
        />
        {/* <Img fluid={backgroundImageOne} /> */}
      </div>
      <div className="secondBlockHome__block">
        <p>
          <p>2</p>
          Vous choisissez l'option transport, on ramene votre box en bas de chez
          vous et vous le charger vous même.
        </p>
        <StaticImage
          src="../../images/two.png"
          width={500}
          alt="test"
          placeholder="blurred"
          quality="90"
        />
      </div>
      <div className="secondBlockHome__block">
        <p>
          <p>3</p>
          Vous choisissez loption manutention,nous chargeons nous même votre
          box.
        </p>
        <StaticImage
          src="../../images/nine.png"
          width={500}
          alt="test"
          placeholder="blurred"
          quality="90"
        />
      </div>
      <div className="secondBlockHome__block">
        <p>
          Ensuite votre box sera scellé par un plombs, puis acheminer dans notre
          entrepôt.
          <br />
          <br />
          Si vous voulez accéder a votre box pour déposer ou récupérer des
          affaires ,cela se fait sur rdv ,48 h à l'avance, avec une facturation
          de 19€ ttc.
        </p>
      </div>
    </div>
  )
}

export default SecondBlockHome

import React from "react"
import { FcApproval } from "react-icons/fc"

const ThirdBlockHome = () => {
  return (
    <div className="thirdBlockHome">
      <div className="thirdBlockHome__text">
        <h3 className="thirdBlockHome__textpara">
          Faire appel à my boxmobile c'est
        </h3>
      </div>
      <div className="thirdBlockHome__multiblock">
        <div className="thirdBlockHome__oneblock">
          <FcApproval className="icone__block" />
          <p>
            7 fois plus rapide et moins cher qu'un garde-meuble traditionnel
          </p>
        </div>
        <div className="thirdBlockHome__oneblock">
          <FcApproval className="icone__block" />
          <p>
            Se débarrasser de la corvée de location d'un véhicule utilitaire et
            de sa caution
          </p>
        </div>
        <div className="thirdBlockHome__oneblock">
          <FcApproval className="icone__block" />
          <p>
            Gagner en souplesse et en sérénité; le Cube est livré puis enlevé à
            votre demande
          </p>
        </div>
        <div className="thirdBlockHome__oneblock">
          <FcApproval className="icone__block" />
          <p>L'assurance d'un déménagement réussi sans stress </p>
        </div>
      </div>
    </div>
  )
}

export default ThirdBlockHome

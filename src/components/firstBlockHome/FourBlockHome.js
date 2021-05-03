import React from "react"

const FourBlockHome = () => {
  return (
    <div className="fourBlockHome">
      <div className="fourBlockHome__title">
        <h2>Un box c'est quoi ?</h2>
      </div>
      <div className="fourBlockHome__paragraphe">
        <p>
          Il s'agit d'une caisse garde meubles en bois équivalent à un box de
          stockage de 2 m² (4m3) ou 4 m² (8m3)
        </p>
        <p>Il est équipé d'une porte à l'avant pour faciliter le chargement</p>
        <p>
          Il est fabriqué en bois traité issu d'une gestion durable des forêts
        </p>
        <p>
          Il est équipé d'aérateurs pour permettre une bonne circulation de
          l'air et assurer une parfaite conservation de vos biens
        </p>
        <button>Estimer vos besoins</button>
      </div>
      <div className="fourBlockHome__picture">
        <p>
          Nous livrons à votre adresse le nombre de box dont vous avez besoin.
          Ils vous sont livrés sur rdv à votre domicile.
        </p>
      </div>
    </div>
  )
}

export default FourBlockHome

import React from "react"

const FourBlockHome = () => {
  return (
    <div className="fourBlockHome">
      <div className="fourBlockHome__title">
        <h2>Le cube c'est quoi ?</h2>
      </div>
      <div className="fourBlockHome__paragraphe">
        <p>
          Il s'agit d'une caisse garde meubles en bois équivalent à un box de
          stockage de 4 m² soit la capacité de 2 studios
        </p>
        <p>Il est équipé d'une porte à l'avant pour faciliter le chargement</p>
        <p>
          Il est fabriqué en bois traité issu d'une gestion durable des forêts
        </p>
        <p>
          Il est équipé d'aérateurs pour permettre une bonne circulation de
          l'air et assurer une parfaite conservation de vos biens
        </p>
        <p>
          Il est équipé d'une housse de protection totalement étanche aux
          agressions climatiques (UV, pluie, gel, neige…)
        </p>
        <p>
          Il est équipé de sangles vous permettant d'attacher votre mobilier
        </p>
        <button>Estimer vos besoins</button>
      </div>
      <div className="fourBlockHome__picture">
        <p>
          Nous livrons à votre adresse le nombre de Cubes dont vous avez besoin.
          Ils vous sont livrés avec tout le matériel nécessaire à l'emballage et
          à la protection de vos biens. Vous pourrez vous procurez des cartons
          de déménagement, ainsi que toutes les autres fournitures d'emballage
          dans notre boutique en ligne.
        </p>
      </div>
    </div>
  )
}

export default FourBlockHome

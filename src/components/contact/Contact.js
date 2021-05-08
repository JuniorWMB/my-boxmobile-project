import React from "react"

const contact = () => {
  return (
    <div>
      <h1 className="pageTwo__title">CONTACTEZ-NOUS</h1>
      <div className="blockContact__master">
        <form action="" className="contactPage__form">
          <input type="text" placeholder="Prénom" />
          <input type="text" placeholder="Nom" />
          <input type="text" placeholder="Téléphone" />
          <input type="email" placeholder="Email" />
          <label htmlFor="Votre Projet :">
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Votre projet ..."
            ></textarea>
          </label>
          <div className="checkBox">
            <p>
              <input type="checkbox" name="" id="check" />
              En soumettant ce formulaire, j'accepte que les informations
              saisies soient exploitées pour permettre de me contacter dans le
              cadre de la demande de contact.
            </p>
          </div>
          <button className="button__form">Envoyer</button>
        </form>
        <div className="contact__phone">
          <h3 className="title">My Box Mobile Service</h3>
          <button>0783062424</button>
          <button>0677837697</button>
        </div>
      </div>
    </div>
  )
}

export default contact

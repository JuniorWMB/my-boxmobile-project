import React from "react"

const FirstBlockHome = () => {
  return (
    <div className="firstBlockHome__contain">
      {/* <iframe
        src="https://www.youtube.com/watch?v=3-CQBgMNr-s"
        title="test"
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
        frameBorder="0"
        webkitallowfullscreen="true"
        mozallowfullscreen="true"
        allowFullScreen="true"
        width="100%"
        height="100%"
      /> */}

      <div className="firstBlock__ssBlockOne">
        <p>Notre concept</p>
        <p>En 30 secondes</p>
        <div className="linkVideo">1</div>
      </div>
      <div className="firstBlock__ssBlockTwo">
        <h3>Le stockage qui se déplace chez vous !</h3>
        <button>Tarifs et réservations</button>
      </div>
      <div className="firstBlock__ssBlockThird">
        <p>Pourquoi notre stockage mobile est plus rapide ?</p>
      </div>
    </div>
  )
}

export default FirstBlockHome

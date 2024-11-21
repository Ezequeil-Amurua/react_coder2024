// import React from 'react'

// function card() {
//   return (
//     <div>card</div>
//   )
// }

// export default card

import "./Card.css";

function Card ({img, title = "Title", dates = "Dates", info = "Info"}) {
    return (
        <div className="Card">
            <img src= {img} alt="Destino"/>
            <h2>{title}</h2>
            <h3>{dates}</h3>
            <p>{info}</p>
        </div>
    )
}

export default Card;
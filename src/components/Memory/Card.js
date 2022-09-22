import React, { useEffect, useState } from "react";
import "./Card.scss";

function Card(props) {
  // const [flip, setFlip] = useState(false);

  const cardHandler = function () {
    // setFlip(true);
    props.onCards(props.position);
  };

  let cardClass = "item inactive";

  if (props.cardStatus === "active") {
    cardClass = "item active";
  }

  if (props.cardStatus === "wrong") {
    cardClass = "item inactive";
  }
  return (
    <li className={cardClass} key={props.id} onClick={cardHandler}>
      <img src={props.image} alt={props.name} />
      <div></div>
    </li>
  );
}

export default Card;

import React from "react";
import "./Card.scss";
import black from "../Images/black.jpg";

function Card(props) {
  const cardHandler = function () {
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
      <div>
        <img src={black} alt="background" />
      </div>
    </li>
  );
}

export default Card;

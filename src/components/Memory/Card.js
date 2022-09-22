import React, { useEffect, useState } from "react";
import "./Card.scss";

function Card(props) {
  const { choosenCards, cardStatus } = props;

  const cardHandler = function () {
    props.onCards({ id: props.id, pos: props.position });
  };

  useEffect(() => {}, [cardStatus]);

  console.log(cardStatus);

  const cardClass =
    props.cardStatus === "active" ? "item active" : "item inactive";

  return (
    <li className={cardClass} key={props.id} onClick={cardHandler}>
      <img src={props.image} alt={props.name} />
      <div></div>
    </li>
  );
}

export default Card;

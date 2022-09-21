import React, { useEffect, useState } from "react";
import "./Card.scss";

function Card(props) {
  const [flip, setFlip] = useState(false);

  const { choosenCards } = props;

  const cardHandler = function () {
    props.onCards({ id: props.id, pos: props.position });
  };

  // useEffect(() => {
  //   setTimeout(() => {

  //   }, 800);
  // }, [choosenCards]);

  const cardClass = props.cardStatus ? "item active" : "item inactive";

  return (
    <li className={cardClass} key={props.id} onClick={cardHandler}>
      <img src={props.image} alt={props.name} />
      <div></div>
    </li>
  );
}

export default Card;

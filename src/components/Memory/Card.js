import React, { useEffect, useState } from "react";
import "./Card.scss";

function Card(props) {
  const [flip, setFlip] = useState(false);

  const cardHandler = function () {
    setFlip(true);

    setTimeout(() => {
      setFlip(false);
    }, 1000);
  };

  const cardClass = flip ? "item active" : "item inactive";

  return (
    <li className={cardClass} key={props.id} onClick={cardHandler}>
      <img src={props.image} alt={props.name} />
      <div></div>
    </li>
  );
}

export default Card;

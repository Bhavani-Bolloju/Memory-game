import React from "react";
import "./Card.css";

function Card(props) {
  const onCardHandler = function() {
    props.onSelect(props.id);
  };

  const cardClass =
    props.status === "" || props.status === "wrong"
      ? "Card inactive"
      : props.status === "active correct"
      ? "Card active correct"
      : "Card active";

  return (
    <div onClick={onCardHandler} className={cardClass}>
      <div className="img">
        <img src={props.img} alt="" />
      </div>
      <div className="back"></div>
    </div>
  );
}

export default Card;

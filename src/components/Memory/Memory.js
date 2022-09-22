import React, { useEffect, useState, useReducer } from "react";

import styled from "styled-components";
import dog from "../Images/dog.jpg";
import bird from "../Images/bird.jpg";
import cat from "../Images/cat.jpg";
import pigeon from "../Images/pigeon.jpg";
import rabbit from "../Images/rabbit.jpg";
import starfish from "../Images/starfish.jpg";
import white from "../Images/white.jpg";
import Card from "./Card";
import { act } from "react-dom/test-utils";

const dummy_data = [
  {
    name: "bird",
    img: bird,
    id: "1",
    status: "",
  },
  {
    name: "bird",
    img: bird,
    id: "1",
    status: "",
  },
  {
    name: "cat",
    img: cat,
    id: "2",
    status: "",
  },
  {
    name: "cat",
    img: cat,
    id: "2",
    status: "",
  },
  {
    name: "dog",
    img: dog,
    id: "3",
    status: "",
  },
  {
    name: "dog",
    img: dog,
    id: "3",
    status: "",
  },
  {
    name: "pigeon",
    img: pigeon,
    id: "4",
    status: "",
  },
  {
    name: "pigeon",
    img: pigeon,
    id: "4",
    status: "",
  },
  {
    name: "rabbit",
    img: rabbit,
    id: "5",
    status: "",
  },
  {
    name: "rabbit",
    img: rabbit,
    id: "5",
    status: "",
  },
  {
    name: "starfish",
    img: starfish,
    id: "6",
    status: "",
  },
  {
    name: "starfish",
    img: starfish,
    id: "6",
    status: "",
  },
];
const initialValue = {
  cardsChoosen: [],
  cardsPosition: [],
  data: dummy_data,
};

const cardReducer = function (initialValue, action) {
  if (action.type === "CARD") {
    let id;
    let pos;
    const cardsData = [...initialValue.data];

    if (initialValue.cardsPosition.length > 1) {
      id = [action.val.id];
      pos = [action.val.pos];
    } else {
      id = [...initialValue.cardsChoosen, action.val.id];
      pos = [...initialValue.cardsPosition, action.val.pos];

      // console.log(initialValue.cardsChoosen, action.val.id);
    }

    cardsData[action.val.pos].status = "active";

    return {
      cardsChoosen: id,
      cardsPosition: pos,
      data: cardsData,
    };
  }

  //mismatched

  if (action.type === "MISMATCHED") {
    const wrongCards = action.val;
    const cards = [...initialValue.data];

    cards[wrongCards[0]].status = "active wrong";
    cards[wrongCards[1]].status = "active wrong";
    // console.log(cards);
  }
  return initialValue;
};

//MEMORY FUNCTIONS:
const Memory = function () {
  const [cards, dispatchCardAction] = useReducer(cardReducer, initialValue);

  const { cardsChoosen, cardsPosition } = cards;

  const choosenCardsHandler = function (value) {
    dispatchCardAction({ type: "CARD", val: value });
  };

  useEffect(() => {
    if (cardsChoosen.length === 2 && cardsChoosen[0] !== cardsChoosen[1]) {
      dispatchCardAction({ type: "MISMATCHED", val: cardsPosition });
    }
  }, [cardsChoosen, cardsPosition]);

  return (
    <Grid>
      {cards.data.map((card, i) => (
        <Card
          onCards={choosenCardsHandler}
          choosenCards={cards.cardsChoosen}
          cardStatus={card.status}
          key={i}
          card={card}
          id={card.id}
          position={i}
          image={card.img}
          name={card.name}
        />
      ))}
    </Grid>
  );
};

const Grid = styled.ul`
  list-style: none;
  display: grid;
  align-content: center;
  grid-template-columns: repeat(3, 120px);
  grid-gap: 1rem;
  text-align: center;
  outline: none;
`;

export default Memory;

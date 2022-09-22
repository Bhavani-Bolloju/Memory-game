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
    img: bird,
    id: "1",
    status: "",
  },
  {
    img: bird,
    id: "1",
    status: "",
  },
  {
    img: cat,
    id: "2",
    status: "",
  },
  {
    img: cat,
    id: "2",
    status: "",
  },
  {
    img: dog,
    id: "3",
    status: "",
  },
  {
    img: dog,
    id: "3",
    status: "",
  },
  {
    img: pigeon,
    id: "4",
    status: "",
  },
  {
    img: pigeon,
    id: "4",
    status: "",
  },
  {
    img: rabbit,
    id: "5",
    status: "",
  },
  {
    img: rabbit,
    id: "5",
    status: "",
  },
  {
    img: starfish,
    id: "6",
    status: "",
  },
  {
    img: starfish,
    id: "6",
    status: "",
  },
].sort(() => Math.random() - 0.5);

//MEMORY FUNCTIONS:
const Memory = function () {
  const [cards, setCards] = useState(dummy_data);
  const [choosenCards, setChoosenCards] = useState([]);

  const choosenCardsHandler = function (value) {
    const data = [...cards];
    const updatedData = [...data];
    data[value].status = "active";
    setCards(data);

    if (choosenCards.length > 1) {
      setChoosenCards([value]);
    } else {
      setChoosenCards((prev) => {
        return [...prev, value];
      });
    }

    if (choosenCards.length === 1 && data[choosenCards].id !== data[value].id) {
      setTimeout(() => {
        updatedData[choosenCards].status = "wrong";
        updatedData[value].status = "wrong";
        setCards(updatedData);
      }, 1000);
    }
  };

  // console.log(cards);ś

  return (
    <Grid>
      {cards.map((card, i) => (
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

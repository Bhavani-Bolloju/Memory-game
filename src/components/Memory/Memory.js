import React, { useState } from "react";

import styled from "styled-components";

import Card from "./Card";

//MEMORY FUNCTIONS:
const Memory = function (props) {
  const [cards, setCards] = useState(props.dummyData);
  const [choosenCards, setChoosenCards] = useState([]);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(0);

  const choosenCardsHandler = function (value) {
    const data = [...cards];
    const updatedData = [...data];
    data[value].status = "active";
    setCards(data);

    // console.log(choosenCards.length);

    if (choosenCards.length > 1 || choosenCards.length === 0) {
      setChoosenCards([value]);
    } else {
      setChoosenCards((prev) => {
        return [...prev, value];
      });
    }

    if (choosenCards.length === 1 && choosenCards[0] === value) {
      setChoosenCards([choosenCards[0]]);
    }

    if (choosenCards.length === 1 && data[choosenCards].id !== data[value].id) {
      setTimeout(() => {
        updatedData[choosenCards].status = "wrong";
        updatedData[value].status = "wrong";
        setScore((prev) => prev + 1);
        setCards(updatedData);
      }, 1000);
    }
    if (choosenCards.length === 1 && data[choosenCards].id === data[value].id) {
      setCompleted((prev) => prev + 1);
    }
  };

  // console.log(cards.length / 2 === completed);

  return (
    <>
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
    </>
  );
};

const Grid = styled.ul`
  display: grid;
  list-style: none;
  grid-template-columns: repeat(3, 120px);

  /* grid-gap: 0.5rem; */
  margin: auto;
  padding: 0;
`;

export default Memory;

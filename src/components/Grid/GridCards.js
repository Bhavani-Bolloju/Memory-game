import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";

function GridCards(props) {
  const [cards, setCards] = useState(props.cardsData);
  const [choosenCards, setChoosenCards] = useState([]);

  const choosenCardsHandler = function (position) {
    const updatedCards = [...cards];
    updatedCards[position].status = "active";
    setCards(updatedCards);

    const data = [...cards];
    const matchData = [...cards];

    if (choosenCards.length > 1) {
      setChoosenCards([position]);
    } else {
      setChoosenCards((prev) => {
        return [...prev, position];
      });
    }

    if (choosenCards.length === 1 && choosenCards[0] === position) {
      setChoosenCards([choosenCards[0]]);
    }

    if (
      choosenCards.length === 1 &&
      data[choosenCards[0]].id !== data[position].id
    ) {
      setTimeout(() => {
        data[choosenCards[0]].status = "wrong";
        data[position].status = "wrong";
        setCards(data);
      }, 1000);
    }

    if (
      choosenCards.length === 1 &&
      matchData[choosenCards[0]].id === matchData[position].id
    ) {
      console.log(choosenCards.length);

      setTimeout(() => {
        matchData[choosenCards[0]].status = "active correct";
        matchData[position].status = "active correct";
        setCards(matchData);
      }, 500);
    }
  };

  console.log(choosenCards);

  return (
    <Layout>
      {cards.map((item, i) => (
        <Card
          img={item.img}
          key={i}
          id={i}
          status={item.status}
          onSelect={choosenCardsHandler}
        />
      ))}
    </Layout>
  );
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 10rem);
  grid-gap: 2rem;
`;

export default GridCards;

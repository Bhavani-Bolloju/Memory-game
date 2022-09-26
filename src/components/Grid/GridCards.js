import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";

function GridCards(props) {
  const [cards, setCards] = useState(props.cardsData);
  const [choosenCards, setChoosenCards] = useState([]);

  const choosenCardsHandler = function (position) {
    const updatedCards = [...cards];

    if (choosenCards.length > 1) {
      setChoosenCards([position]);
    } else {
      setChoosenCards((prev) => {
        return [...prev, position];
      });
    }

    updatedCards[position].status = "active";
    setCards(updatedCards);
  };

  console.log(cards);

  return (
    <Layout>
      {cards.map((item, i) => (
        <Card
          img={item.img}
          key={i}
          id={i}
          active={item.status}
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

import React, { useState } from "react";
import styled from "styled-components";
import Card from "./Card";
import Overlay from "../UI/Overlay";

function GridCards(props) {
  const [cards, setCards] = useState(props.cardsData);
  const [choosenCards, setChoosenCards] = useState([]);
  const [score, setScore] = useState(0);
  const [completed, setCompleted] = useState(0);

  const choosenCardsHandler = function (position) {
    const updatedCards = [...cards];
    updatedCards[position].status = "active";
    setCards(updatedCards);

    const data = [...cards];
    const matchData = [...cards];

    //adding to the list
    if (choosenCards.length > 1) {
      setChoosenCards([position]);
    } else {
      setChoosenCards((prev) => {
        return [...prev, position];
      });
    }

    //if same card choosen twice

    if (choosenCards.length === 1 && choosenCards[0] === position) {
      setChoosenCards([choosenCards[0]]);
    }

    //if wrong cards
    if (
      choosenCards.length === 1 &&
      data[choosenCards[0]].id !== data[position].id
    ) {
      setScore((prev) => prev + 1);

      setTimeout(() => {
        data[choosenCards[0]].status = "wrong";
        data[position].status = "wrong";
        setCards(data);
      }, 1000);
    }

    //if correct cards

    if (
      choosenCards.length === 1 &&
      matchData[choosenCards[0]].id === matchData[position].id &&
      choosenCards[0] !== position
    ) {
      setCompleted((prev) => prev + 1);
      setTimeout(() => {
        matchData[choosenCards[0]].status = "active correct";
        matchData[position].status = "active correct";
        setCards(matchData);
      }, 500);
    }
  };

  // console.log(cards);

  const resetHandler = function () {
    setScore(0);
    setCompleted(0);
    setChoosenCards([]);
    const resetCards = [...cards].sort(() => Math.random() - 0.5);
    const resetStatus = resetCards.map((item) => {
      return { ...item, status: "" };
    });
    setCards(resetStatus);
  };

  // console.log(completed === props.cardsData.length / 2);

  return (
    <>
      <Score>
        <div className="score">
          <span>Attempts:</span>
          <span>{score}</span>
        </div>
        <button onClick={resetHandler} className="reset">
          Reset
        </button>
      </Score>
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
      <Overlay complete={completed === props.cardsData.length / 2} />
    </>
  );
}

const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 10rem);
  grid-gap: 2rem;

  @media only screen and (max-width: 500px) {
    grid-template-columns: repeat(4, 7rem);
    grid-gap: 0.5rem;
  }
`;

const Score = styled.div`
  display: flex;
  justify-content: space-between;
  width: 60%;
  padding: 2rem 0;
  text-transform: uppercase;
  color: white;
  font-size: 2rem;

  .score {
    & > :nth-of-type(1) {
      padding-right: 1rem;
    }

    & > :nth-child(2) {
      font-size: 2rem;
    }
  }

  .reset {
    font-size: 2rem;
    background-color: transparent;
    border: none;
    color: inherit;
    font-family: inherit;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;

    &:hover {
      cursor: pointer;
      background-color: #00c9ff;
    }
  }
`;

export default GridCards;

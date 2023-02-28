import React from "react";
import styled from "styled-components";
import Card from "./Card";
import Overlay from "../UI/Overlay";
import { useCard } from "../context/CardContext";

//functionality

function GridCards() {
  const { cards, dispatch } = useCard();

  const { data, matchPair, attempts, complete } = cards;

  const choosenCardsHandler = function(position) {
    dispatch({ type: "ACTIVE", val: position });

    // correct pairing
    if (matchPair.length === 1 && data[matchPair[0]].id === data[position].id) {
      setTimeout(() => {
        dispatch({ type: "CORRECT", val: position });
      }, 800);
    }

    //incorrect pairing
    if (matchPair.length === 1 && data[matchPair[0]].id !== data[position].id) {
      setTimeout(() => {
        dispatch({ type: "WRONG", val: position });
      }, 800);
    }
  };

  // //reset functionality
  const resetHandler = function() {
    dispatch({ type: "RESET" });
  };

  return (
    <>
      <Score>
        <div className="score">
          <span>Attempts:</span>
          <span>{attempts}</span>
        </div>

        <button onClick={resetHandler} className="reset">
          Reset
        </button>
      </Score>
      <Layout>
        {cards.data.map((item, i) => (
          <Card
            img={item.img}
            key={i}
            id={i}
            status={item.status}
            onSelect={choosenCardsHandler}
          />
        ))}
      </Layout>
      <Overlay complete={complete === 0} />
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

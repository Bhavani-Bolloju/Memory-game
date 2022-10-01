import React, { useReducer } from "react";
import styled from "styled-components";
import Card from "./Card";
import Overlay from "../UI/Overlay";

import whale from "../Images/whale.png";
import lion from "../Images/lion.png";
import trex from "../Images/t-rex.png";
import turtle from "../Images/turtle.png";
import koala from "../Images/koala.png";
import fox from "../Images/fox.png";
import mammoth from "../Images/mammoth.png";
import raccoon from "../Images/raccoon.png";

const cards_data = [
  {
    img: whale,
    id: "1",
    status: "",
  },
  {
    img: whale,
    id: "1",
    status: "",
  },
  {
    img: lion,
    id: "2",
    status: "",
  },
  {
    img: lion,
    id: "2",
    status: "",
  },
  {
    img: trex,
    id: "3",
    status: "",
  },
  {
    img: trex,
    id: "3",
    status: "",
  },
  {
    img: fox,
    id: "4",
    status: "",
  },
  {
    img: fox,
    id: "4",
    status: "",
  },
  {
    img: koala,
    id: "5",
    status: "",
  },
  {
    img: koala,
    id: "5",
    status: "",
  },
  {
    img: raccoon,
    id: "6",
    status: "",
  },
  {
    img: raccoon,
    id: "6",
    status: "",
  },
  {
    img: mammoth,
    id: "7",
    status: "",
  },
  {
    img: mammoth,
    id: "7",
    status: "",
  },
  {
    img: turtle,
    id: "8",
    status: "",
  },
  {
    img: turtle,
    id: "8",
    status: "",
  },
];
// .sort(() => Math.random() - 0.5);

const initialValue = {
  data: cards_data,
  matchPair: [],
  attempts: 0,
  complete: cards_data.length / 2,
};

const cardReducer = function (initialValue, action) {
  //active
  if (action.type === "ACTIVE") {
    const cardsData = [...initialValue.data];

    cardsData[action.val].status = "active";

    let updatedMatchPair;
    updatedMatchPair = [...initialValue.matchPair, action.val];

    if (initialValue.matchPair.length > 1) {
      updatedMatchPair = [action.val];
    }

    return {
      data: cardsData,
      matchPair: updatedMatchPair,
      attempts: initialValue.attempts,
      complete: initialValue.complete,
    };
  }

  //matching pair
  if (action.type === "CORRECT") {
    const updatedData = [...initialValue.data];
    updatedData[initialValue.matchPair[0]].status = "active correct";
    updatedData[action.val].status = "active correct";

    const updatedCompleteIn = initialValue.complete - 1;

    return {
      data: updatedData,
      matchPair: initialValue.matchPair,
      attempts: initialValue.attempts,
      complete: updatedCompleteIn,
    };
  }

  //wrong pair
  if (action.type === "WRONG") {
    const updatedCards = [...initialValue.data];
    updatedCards[initialValue.matchPair[0]].status = "wrong";
    updatedCards[action.val].status = "wrong";
    const score = initialValue.attempts + 1;

    return {
      data: updatedCards,
      matchPair: initialValue.matchPair,
      attempts: score,
      complete: initialValue.complete,
    };
  }

  //reset Game

  if (action.type === "RESET") {
    const updatedCards = [...initialValue.data];
    // .sort(() => Math.random() - 0.5);
    const resetStatus = updatedCards.map((item) => {
      return { ...item, status: "" };
    });

    return {
      data: resetStatus,
      matchPair: [],
      attempts: 0,
      complete: resetStatus.length / 2,
    };
  }

  return initialValue;
};

//functionality

function GridCards() {
  const [cardData, dispatchCards] = useReducer(cardReducer, initialValue);

  const { data, matchPair, attempts, complete } = cardData;

  const choosenCardsHandler = function (position) {
    dispatchCards({ type: "ACTIVE", val: position });

    // correct pairing
    if (matchPair.length === 1 && data[matchPair[0]].id === data[position].id) {
      setTimeout(() => {
        dispatchCards({ type: "CORRECT", val: position });
      }, 800);
    }

    //incorrect pairing
    if (matchPair.length === 1 && data[matchPair[0]].id !== data[position].id) {
      setTimeout(() => {
        dispatchCards({ type: "WRONG", val: position });
      }, 800);
    }
  };

  //reset functionality
  const resetHandler = function () {
    dispatchCards({ type: "RESET" });
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
        {cardData.data.map((item, i) => (
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

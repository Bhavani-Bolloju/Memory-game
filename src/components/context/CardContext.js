import React, { useContext, useReducer } from "react";
import { createContext } from "react";
import { cards_data } from "./data";

const initialValue = {
  data: cards_data,
  matchPair: [],
  attempts: 0,
  complete: cards_data.length / 2,
};

const cardReducer = function(initialValue, action) {
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
    const updatedCards = [...initialValue.data].sort(() => Math.random() - 0.5);
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

// export default cardReducer;

export const CardContext = createContext({
  cards: null,
  dispatch: () => {},
});

const CardContextProvider = function(props) {
  const [cardData, dispatchCards] = useReducer(cardReducer, initialValue);
  // console.log(cardData);

  const cntxValue = {
    cards: cardData,
    dispatch: dispatchCards,
  };

  return (
    <CardContext.Provider value={cntxValue}>
      {props.children}
    </CardContext.Provider>
  );
};

//use card Context

export const useCard = function() {
  return useContext(CardContext);
};

export default CardContextProvider;

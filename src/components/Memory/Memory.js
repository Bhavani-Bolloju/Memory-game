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
    }

    cardsData[action.val.pos].status = "active";

    return {
      cardsChoosen: id,
      cardsPosition: pos,
      data: dummy_data,
    };

    // console.log(

    //
    // );
    // return {
    //   cardsChoosen: [action.val.id],
    //   cardsPosition: [action.val.pos],
    //   data: dummy_data,
    // };
  }

  return initialValue;
};

const Memory = function () {
  // const [choosenCards, setChoosenCards] = useState([]);
  // const [cardPosition, setCardPosition] = useState([]);
  // const [data, setData] = useState(dummy_data);
  const [cards, dispatchCardAction] = useReducer(cardReducer, initialValue);

  console.log(cards);

  const choosenCardsHandler = function (value) {
    dispatchCardAction({ type: "CARD", val: value });

    // setChoosenCards((prev) => {
    //   if (prev.length < 2) {
    //     return [...prev, value.id];
    //   } else {
    //     return [value.id];
    //   }
    // });

    // setCardPosition((prev) => {
    //   if (prev.length < 2) {
    //     return [...prev, value.pos];
    //   } else {
    //     return [value.pos];
    //   }
    // });
  };

  // useEffect(() => {
  //   if (choosenCards[0] === choosenCards[1] && choosenCards.length > 0) {
  //     // dummy_data[cardPosition[0]].status = "correct";
  //     // dummy_data[cardPosition[1]].status = "correct";
  //     const pos1 = cardPosition[0];
  //     const pos2 = cardPosition[1];

  //     const firstStatus = data[pos1];
  //     const secondStatus = data[pos2];
  //     firstStatus.status = "correct";
  //     secondStatus.status = "correct";

  //     setData((prev) => {
  //       return [...prev, firstStatus, secondStatus];
  //     });
  //   } else if (
  //     choosenCards.length === 2 &&
  //     choosenCards[0] !== choosenCards[1]
  //   ) {
  //     dummy_data[cardPosition[0]].status = "wrong";
  //     dummy_data[cardPosition[1]].status = "wrong";
  //   }
  // }, [choosenCards, data, cardPosition]);

  return (
    <Grid>
      {cards.data.map((card, i) => (
        <Card
          onCards={choosenCardsHandler}
          // choosenCards={choosenCards}
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

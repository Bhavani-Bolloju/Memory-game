import React, { useEffect, useState } from "react";

import styled from "styled-components";
import dog from "../Images/dog.jpg";
import bird from "../Images/bird.jpg";
import cat from "../Images/cat.jpg";
import pigeon from "../Images/pigeon.jpg";
import rabbit from "../Images/rabbit.jpg";
import starfish from "../Images/starfish.jpg";
import white from "../Images/white.jpg";

import Image from "../Memory/Image";

const cardData = [
  {
    name: "bird",
    img: bird,
    id: "01",
  },
  {
    name: "bird",
    img: bird,
    id: "02",
  },
  {
    name: "cat",
    img: cat,
    id: "03",
  },
  {
    name: "cat",
    img: cat,
    id: "04",
  },
  {
    name: "dog",
    img: dog,
    id: "05",
  },
  {
    name: "dog",
    img: dog,
    id: "06",
  },
  {
    name: "pigeon",
    img: pigeon,
    id: "07",
  },
  {
    name: "pigeon",
    img: pigeon,
    id: "08",
  },
  {
    name: "rabbit",
    img: rabbit,
    id: "09",
  },
  {
    name: "rabbit",
    img: rabbit,
    id: "10",
  },
  {
    name: "starfish",
    img: starfish,
    id: "11",
  },
  {
    name: "starfish",
    img: starfish,
    id: "12",
  },
];
const Memory = function () {
  const [choosenCards, setChoosenCards] = useState([]);

  const choosenCardsHandler = function (value) {
    setChoosenCards((prev) => {
      return [...prev, value.name];
    });
  };

  console.log(choosenCards);

  return (
    <Grid>
      {cardData.map((card, i) => (
        <Image
          onChoosen={choosenCardsHandler}
          image={card.img}
          key={card.id}
          name={card.name}
          id={i}
          currentCards={choosenCards}
        />
      ))}
    </Grid>
  );
};

export default Memory;

const Grid = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 120px);
  gap: 0.5rem;
`;

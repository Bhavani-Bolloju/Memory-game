import React, { useState } from "react";
import styled from "styled-components";

function Card(props) {
  const onCardHandler = function () {
    props.onSelect(props.id);
  };

  const cssClass = props.active === "active" ? "active" : "inactive";

  console.log(props.active);
  return (
    <Item onClick={onCardHandler} className={cssClass}>
      <img src={props.img} alt="" />
      <div className="back"></div>
    </Item>
  );
}

//styles
const Item = styled.div`
  width: 100%;
  height: 10rem;
  position: relative;

  ${(props) => props.className === "active"} {
    img {
      transform: rotateY(-180deg);
      backface-visibility: hidden;
    }

    .back {
      transform: rotateY(0deg);
    }
  }

  ${(props) => props.className === "inactive"} {
    img {
      transform: rotateY(0deg);
    }

    .back {
      transform: rotateY(180deg);
      backface-visibility: hidden;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 1rem;
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    color: #2980b9;
    transition: transform 0.5s ease-out;
  }

  .back {
    width: 100%;
    height: 100%;
    transition: transform 0.5s ease-out;
    border-radius: 1rem;
    background: linear-gradient(45deg, #ddf8ff, #88e6ff);
    position: absolute;
    top: 0;
    left: 0;
    box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.2);

    &:hover {
      box-shadow: 0.2rem 0.2rem 2rem rgba(0, 0, 0, 0.3);
    }
  }

  &:hover {
    cursor: pointer;
  }
`;

export default Card;

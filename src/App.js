import styled from "styled-components";

import GridCards from "./components/Grid/GridCards";

// import chimpanzee from "../src/components/Images/chimpanzee.png";
import whale from "../src/components/Images/whale.png";
import lion from "../src/components/Images/lion.png";
import trex from "../src/components/Images/t-rex.png";
import turtle from "../src/components/Images/turtle.png";
import koala from "../src/components/Images/koala.png";
import fox from "../src/components/Images/fox.png";
import mammoth from "../src/components/Images/mammoth.png";
// import raccoon from "../src/components/Images/raccoon.png";
import bear from "../src/components/Images/bear.png";

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
    img: bear,
    id: "6",
    status: "",
  },
  {
    img: bear,
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

function App() {
  return (
    <Wrapper>
      <h1 style={{ padding: "2rem", color: "white" }}>Memory Game</h1>
      <GridCards cardsData={cards_data} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin: 1.5rem 0;
    font-size: 5rem;
    font-weight: 400;
  }
`;

export default App;

import styled from "styled-components";

import GridCards from "./components/Grid/GridCards";

function App() {
  return (
    <Wrapper>
      <h1>Memory Game</h1>
      <GridCards />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  padding: 5rem 0;

  h1 {
    font-size: 4rem;
    font-weight: 400;
    color: white;
    text-transform: uppercase;
  }
`;

export default App;

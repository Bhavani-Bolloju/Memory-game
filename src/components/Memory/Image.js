// import styled from "styled-components";

import "./Image.scss";
import React, { useEffect, useRef, useState } from "react";

function Image(props) {
  const chooseRef = useRef();

  const [flipcard, setFlipcard] = useState(false);

  const chooseHandler = function () {
    setFlipcard(true);
    props.onChoosen({ name: props.name, id: props.id });
  };

  useEffect(() => {
    setTimeout(() => {
      setFlipcard(false);
    }, 1000);
  }, [flipcard]);

  return (
    <li
      className={`item ${flipcard ? "active" : "inactive"}`}
      onClick={chooseHandler}
      ref={chooseRef}
    >
      <img src={props.image} alt={props.name} />
      <div></div>
    </li>
  );
}

export default Image;

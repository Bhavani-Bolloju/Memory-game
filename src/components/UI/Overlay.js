import React from "react";
import "./Overlay.scss";
import { CSSTransition } from "react-transition-group";

function Overlay(props) {
  const { complete } = props;

  return (
    <CSSTransition
      in={complete}
      timeout={500}
      mountOnEnter
      unmountOnExit
      classNames={{ enter: "Overlay-enter", exitActive: "Overlay-exit" }}
    >
      <div className="Overlay">Game Over</div>
    </CSSTransition>
  );
}

export default Overlay;

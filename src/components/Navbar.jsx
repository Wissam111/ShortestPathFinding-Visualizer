import React, { Component } from "react";
import InstructionBar from "./instructionBar";
import ActionBar from "./actionBar";

function Navbar(props) {
  return (
    <div className="nav-bar">
      <ActionBar
        nodes={props.nodes}
        rows={props.rows}
        cols={props.cols}
        handleClear={props.handleClear}
        handleMine={props.handleMine}
        handleWall={props.handleWall}
        mousePressed={props.mousePressed}
        handleToss={props.handleToss}
      />
      <InstructionBar />
    </div>
  );
}

export default Navbar;

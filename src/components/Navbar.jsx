import React, { Component } from "react";
import InstructionBar from "./instructionBar";
import ActionBar from "./actionBar";

function Navbar(props) {
  return (
    <div className="nav-bar">
      <ActionBar
        grid={props.grid}
        rows={props.rows}
        cols={props.cols}
        startNode={props.startNode}
        endNode={props.endNode}
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

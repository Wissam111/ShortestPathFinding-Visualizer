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
      />
      <InstructionBar />
    </div>
  );
}

export default Navbar;

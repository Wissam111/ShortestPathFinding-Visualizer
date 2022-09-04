import React, { Component } from "react";
import InstructionBar from "./instructionBar";
import ActionBar from "./actionBar";

function Navbar() {
  return (
    <div className="nav-bar">
      <ActionBar />
      <InstructionBar />
    </div>
  );
}

export default Navbar;

import React, { Component } from "react";
function InstructionBar() {
  return (
    <div className="instruction">
      <ul>
        <li>
          <i
            style={{
              color: "green",
              fontSize: "18px",
            }}
            className="fa fa-bullseye"
          ></i>
          Src Node
        </li>
        <li>
          <i
            style={{
              color: "red",
              fontSize: "18px",
            }}
            className="fa fa-bullseye"
          ></i>
          Dest Node
        </li>
        <li>
          <img
            src={require("../imgs/bomb.webp")}
            alt=""
            className="mine-logo"
          />
          Mine Node
        </li>
        <li>
          <i
            class="fa fa-square-o"
            style={{ background: "black" }}
            aria-hidden="true"
          ></i>
          Unvisited Node
        </li>
        <li>
          <i class="fa fa-square-o sp-icoon" aria-hidden="true"></i> Shortest
          Path
        </li>
      </ul>
    </div>
  );
}

export default InstructionBar;

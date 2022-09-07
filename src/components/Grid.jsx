import React, { Component } from "react";
import { useState } from "react";
import Node from "./Node";
function Grid(props) {
  return (
    <div className="container">
      <div className="grind-container">
        {props.nodes.map((node) => (
          <Node
            key={node.key}
            handleWallClick={props.handleWallClick}
            node={node}
            drop={props.drop}
          />
        ))}
      </div>
    </div>
  );
}

export default Grid;

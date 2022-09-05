import React, { Component } from "react";
import { useState } from "react";
import Node from "./Node";
import Dijkstra from "./algorithms/dijkstraAlgo";
function Grid(props) {
  return (
    <div className="container">
      <div className="grind-container">
        {props.nodes.map((node) => (
          <Node
            key={node.key}
            handleWallClick={props.handleWallClick}
            node={node}
            handleMouseUp={props.handleMouseUp}
          />
        ))}
      </div>
    </div>
  );
}

export default Grid;

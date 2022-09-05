import React, { Component } from "react";
import { useState } from "react";
import Draggable from "react-draggable";
function Node(props) {
  const { id, value, visited, row, col, isWall, isStart, isEnd } = props.node;

  return (
    <div
      onMouseEnter={() => props.handleWallClick(row, col)}
      onMouseUp={props.handleMouseUp}
      id={`node-${row}-${col}`}
      className={isWall ? `Node Node-Enter` : `Node Node-Out`}
    >
      {isStart && (
        <i
          style={{
            color: "green",
            fontSize: "18px",
          }}
          className="fa fa-bullseye"
        ></i>
      )}
      {isEnd && (
        <i
          style={{
            color: "red",
            fontSize: "18px",
          }}
          className="fa fa-bullseye"
        ></i>
      )}
    </div>
  );
}

export default Node;

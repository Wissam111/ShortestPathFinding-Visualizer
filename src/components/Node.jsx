import React, { Component, useEffect, useRef } from "react";
import { useState } from "react";
import Draggable from "react-draggable";
function Node(props) {
  const {
    id,
    value,
    visited,
    row,
    col,
    isWall,
    isStart,
    isEnd,
    isMine,
    isSalve,
  } = props.node;

  const dragOver = (e) => {
    e.preventDefault();
  };
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("node_id", target.id);
    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  };
  const dragOver2 = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      onMouseEnter={() => props.handleWallClick(row, col)}
      id={`node-${row}-${col}`}
      onDrop={props.drop}
      onDragOver={dragOver}
      className={isWall ? `Node Node-Enter` : "Node"}
    >
      {isStart && (
        <i
          id="src-node"
          onDragStart={dragStart}
          onDragOver={dragOver2}
          draggable="true"
          style={{
            color: "green",
            fontSize: "18px",
            cursor: "pointer",
          }}
          className="fa fa-bullseye src"
        ></i>
      )}
      {isEnd && (
        <i
          onDragStart={dragStart}
          onDragOver={dragOver2}
          draggable="true"
          id="dest-node"
          style={{
            color: "red",
            fontSize: "18px",
            cursor: "pointer",
          }}
          className="fa fa-bullseye dest"
        ></i>
      )}
      {isMine && (
        <img className="node-mine" src={require("../imgs/bomb.webp")}></img>
      )}
      {isSalve && (
        <img
          className="node-mine"
          src={require("../imgs/healingSalve.png")}
        ></img>
      )}
    </div>
  );
}

export default Node;

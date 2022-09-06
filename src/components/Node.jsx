import React, { Component } from "react";
import { useState } from "react";
import Draggable from "react-draggable";
function Node(props) {
  const { id, value, visited, row, col, isWall, isStart, isEnd, isMine } =
    props.node;

  // const drop = (e) => {
  //   e.preventDefault();
  //   const node_id = e.dataTransfer.getData("node_id");
  //   const node = document.getElementById(node_id);
  //   node.style.display = "block";
  //   e.target.appendChild(node);
  //   console.log(e.target);
  // };
  const dragOver = (e) => {
    e.preventDefault();
  };
  const dragStart = (e) => {
    const target = e.target;
    e.dataTransfer.setData("node_id", target.id);
    setTimeout(() => {
      console.log(target);
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
    </div>
  );
}

export default Node;

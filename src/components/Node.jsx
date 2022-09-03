import React, { Component } from "react";
import { useState } from "react";
import Draggable from "react-draggable";
function Node(props) {
  const { id, value, visited, row, col, isWall, isStart, isEnd } = props.node;
  const [isHover, setIsHover] = useState(false);
  const colors = ["#e74c3c", "#8e44ad", "#3498db", "#e67e22", "#2ecc71"];
  function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  // console.log(handleWallClick);

  // const handleHover = () => {
  //   setIsHover(true);
  // };
  // const handleOut = () => {
  //   setIsHover(false);
  // };
  //   const dragStart = (e, id) => {
  //     console.log("drag Strat");
  //     e.dataTransfer.setData("Nodeid", id);
  //   };
  //   const dragOver = (e) => {
  //     e.preventDefault();
  //     console.log("draggingover");
  //   };
  //   const dragDrop = (e) => {
  //     let tranfId = e.dataTransfer.getData("Nodeid");
  //     console.log("onDrop");
  //   };
  return (
    <div
      onClick={() => props.handleWallClick(row, col)}
      // onMouseLeave={handleOut}
      //   onDragOver={(e) => dragOver(e)}
      //   onDrop={(e) => dragDrop(e)}
      id={`node-${row}-${col}`}
      className={isWall ? `Node Node-Enter` : `Node Node-Out`}
    >
      {isStart && (
        <i
          //   draggable
          //   onDragStart={(e) => dragStart(e, id)}
          style={{
            color: "green",
            fontSize: "18px",
          }}
          className="fa fa-arrow-right"
        ></i>
      )}

      {isEnd && (
        <i
          //   onDragStart={(e) => dragStart(e, id)}
          //   draggable
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

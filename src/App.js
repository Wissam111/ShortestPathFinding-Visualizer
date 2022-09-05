import React, { Component, Fragment, useState } from "react";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";
function App() {
  const [nodes, setNodes] = useState([]);
  const [mousePressed, setMousePressed] = useState(0);
  const [startNode, setStartNode] = useState({ row: 15, col: 30 });
  const [endNode, setEndNode] = useState({ row: 15, col: 50 });
  const rows = 30;
  const cols = 90;
  function createGrid() {
    let _nodes = [];
    let count = 0;
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        _nodes.push({
          key: count,
          id: count,
          value: i == startNode.row && j == startNode.col ? 0 : Infinity,
          visited: false,
          row: i,
          col: j,
          isWall: false,
          isStart: i == startNode.row && j == startNode.col,
          isEnd: i == endNode.row && j == endNode.col,
          isMine: false,
        });
        count++;
      }
    }
    setNodes(_nodes);
  }
  // let audio = new Audio(require("./imgs/bombSound.mp3"));
  // audio.play();
  React.useEffect(() => {
    createGrid();
  }, []);
  function handleWallClick(row, col) {
    if (!mousePressed) {
      return;
    }

    const updateWall = nodes.map((node) => {
      if (node.row == row && node.col == col && !node.isMine) {
        return { ...node, isWall: true };
      }
      return node;
    });
    setNodes(updateWall);
  }
  function handleClear() {
    console.log("lol");
    createGrid();
  }

  function handleMouseUp() {
    setMousePressed(!mousePressed);
  }

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }
  function handleMine() {
    let updateMinesNodes = [...nodes];
    for (let i = 0; i < 50; i++) {
      let randomId = getRandomInt(0, nodes.length - 1);
      let node = updateMinesNodes[randomId];
      if (!node.isWall) {
        let nodeDom = document.getElementById(`node-${node.row}-${node.col}`);
        let img = document.createElement("img");
        img.classList.add("node-mine");
        img.src = require("./imgs/bomb.webp");
        nodeDom.appendChild(img);
        node.isMine = true;
      }
    }
    setNodes(updateMinesNodes);
  }

  return (
    <Fragment>
      <Navbar
        nodes={nodes}
        rows={rows}
        cols={cols}
        handleClear={handleClear}
        handleMine={handleMine}
      />
      <Grid
        nodes={nodes}
        handleWallClick={handleWallClick}
        handleMouseUp={handleMouseUp}
      />
    </Fragment>
  );
}

export default App;

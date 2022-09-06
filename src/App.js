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

  React.useEffect(() => {
    createGrid();
  }, []);
  function handleWallClick(row, col) {
    if (!mousePressed) {
      return;
    }

    const updateWall = nodes.map((node) => {
      if (
        node.row == row &&
        node.col == col &&
        !node.isMine &&
        !node.isStart &&
        !node.isEnd
      ) {
        return { ...node, isWall: true };
      }
      return node;
    });
    setNodes(updateWall);
  }
  function handleClear() {
    createGrid();
    for (let i = 0; i < nodes.length; i++) {
      let node = nodes[i];
      let nodeDom = document.getElementById(`node-${node.row}-${node.col}`);
      nodeDom.className = "Node";
    }
  }

  function handleWall() {
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
      if (!node.isWall && !node.isMine) {
        node.isMine = true;
      }
    }
    setNodes(updateMinesNodes);
  }
  const drop = (e) => {
    e.preventDefault();
    const node_id = e.dataTransfer.getData("node_id");
    const node = document.getElementById(node_id);
    node.style.display = "block";
    e.target.appendChild(node);
    let temp = e.target.id.split("-");
    let i = parseInt(temp[1]);
    let j = parseInt(temp[2]);
    let _nodes = [...nodes];
    let currNode = _nodes.find((n) => n.row == i && n.col == j);
    setStartNode({ row: i, col: j });
    // console.log(currNode);

    // if (node.className.includes("src")) {
    //   let sNode = _nodes.find((n) => n.isStart);
    //   console.log(sNode.isMine);

    //   // sNode.isStart = false;
    //   currNode.isStart = true;
    //   setStartNode({ row: i, col: j });
    // } else {
    //   let eNode = _nodes.find((n) => n.isEnd);
    //   // eNode.isEnd = false;
    //   currNode.isEnd = true;
    //   setEndNode({ row: i, col: j });
    // }
    // // console.log(_nodes);

    // setNodes(_nodes);
  };
  return (
    <Fragment>
      <Navbar
        nodes={nodes}
        rows={rows}
        cols={cols}
        handleClear={handleClear}
        handleMine={handleMine}
        handleWall={handleWall}
        mousePressed={mousePressed}
      />
      <Grid
        nodes={nodes}
        handleWallClick={handleWallClick}
        drop={drop}
        // handleClickWall={handleClickWall}
      />
    </Fragment>
  );
}

export default App;

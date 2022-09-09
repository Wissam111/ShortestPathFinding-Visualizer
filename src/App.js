import React, { Component, Fragment, useState } from "react";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";
function App() {
  const [nodes, setNodes] = useState([]);
  const [grid , setGrid] = useState([]);
  const [mousePressed, setMousePressed] = useState(0);
  const [startNode, setStartNode] = useState({ row: 15, col: 30 });
  const [endNode, setEndNode] = useState({ row: 15, col: 50 });
  const [isTossed, setIsTossed] = useState(0);
  const [rows, setRows] = useState(25);
  const [cols, setCols] = useState(70);

  function createGrid() {
    let _nodes = [];
    let _grid = [];
    let count = 0;
    for (let i = 0; i < rows; i++) {
      let currPath = [];
      for (let j = 0; j < cols; j++) {
       let n = {
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
          isSalve: false,
          gCost: i == startNode.row && j == startNode.col ? 0 : Infinity,
          hCost: null,
        };
        _nodes.push(n);
        currPath.push(n);
        count++;
      }
      _grid.push(currPath);
    }
    setGrid(_grid);
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
        !node.isEnd &&
        !node.isSalve
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
    setIsTossed(0);
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
    for (let i = 0; i < 40; i++) {
      let randomId = getRandomInt(0, nodes.length - 1);
      let node = updateMinesNodes[randomId];
      if ((!node.isWall && !node.isMine) || !node.isSalve) {
        node.isMine = true;
      }
    }
    setNodes(updateMinesNodes);
  }
  function handleToss() {
    if (isTossed) {
      return;
    }
    let updateSalvesNodes = [...nodes];
    let tossRes = getRandomInt(60, 70);
    for (let i = 0; i < tossRes; i++) {
      let randomId = getRandomInt(0, nodes.length - 1);
      let node = updateSalvesNodes[randomId];
      if (!node.isWall && !node.isMine && !node.isSalve) {
        node.isSalve = true;
      }
    }
    setIsTossed(1);
    setNodes(updateSalvesNodes);
  }

  const drop = (e) => {
    e.preventDefault();
    const node_id = e.dataTransfer.getData("node_id");
    const node = document.getElementById(node_id);
    node.style.display = "block";
    let temp = e.target.id.split("-");
    let i = parseInt(temp[1]);
    let j = parseInt(temp[2]);
    let _nodes = [...nodes];
    let currNode = _nodes.find((n) => n.row == i && n.col == j);

    if (currNode.isWall || currNode.isMine) {
      return;
    }

    if (node.className.includes("src")) {
      let sNode = _nodes.find((n) => n.isStart);
      sNode.isStart = false;
      sNode.value = Infinity;
      currNode.isStart = true;
      currNode.value = 0;
      setStartNode({ row: i, col: j });
    } else {
      let eNode = _nodes.find((n) => n.isEnd);
      eNode.isEnd = false;
      currNode.isEnd = true;
      setEndNode({ row: i, col: j });
    }

    setNodes(_nodes);
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
        handleToss={handleToss}
      />
      <Grid
        grid={grid}
        cols = {cols}
        rows={rows}
        handleWallClick={handleWallClick}
        drop={drop}
        
        
      />
    </Fragment>
  );
}

export default App;

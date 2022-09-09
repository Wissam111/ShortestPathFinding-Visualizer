import React, { Component, Fragment, useState } from "react";
import Grid from "./components/Grid";
import Navbar from "./components/Navbar";
function App() {
  // const [nodes, setNodes] = useState([]);
  const [grid, setGrid] = useState([]);
  const [mousePressed, setMousePressed] = useState(0);
  const [startNode, setStartNode] = useState({ row: 15, col: 30 });
  const [endNode, setEndNode] = useState({ row: 15, col: 50 });
  const [isTossed, setIsTossed] = useState(0);
  const rows = 30;
  const cols = 80;

  /*initialize the grid */
  function createGrid() {
    // let _nodes = [];
    let _grid = [];
    let count = 0;
    for (let i = 0; i < rows; i++) {
      let currPath = [];
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
        currPath.push(n);
        count++;
      }
      _grid.push(currPath);
      _grid.push(currPath);
    }
    setGrid(_grid);
  }

  React.useEffect(() => {
    createGrid();
  }, []);

  /*adding wall on the grid */
  function handleWallClick(row, col) {
    if (!mousePressed) {
      return;
    }
    let tempGrid = [...grid];
    let node = grid[row][col];
    if (
      node.row == row &&
      node.col == col &&
      !node.isMine &&
      !node.isStart &&
      !node.isEnd &&
      !node.isSalve
    ) {
      node.isWall = true;
    }

    setGrid(tempGrid);
  }

  /*clear the grid function */
  function handleClear() {
    createGrid();
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        let nodeDom = document.getElementById(`node-${i}-${j}`);
        nodeDom.className = "Node";
      }
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

  /*place mins on the grid and update the nodes */
  function handleMine() {
    let updateMinesNodes = [...grid];
    for (let i = 0; i < 40; i++) {
      let randomRow = getRandomInt(0, rows - 1);
      let randomCol = getRandomInt(0, cols - 1);
      let node = updateMinesNodes[randomRow][randomCol];
      if (!node.isWall && !node.isMine && !node.isSalve) {
        node.isMine = true;
      }
    }
    setGrid(updateMinesNodes);
  }
  /*place healing Salves randomly on the grid and update the nodes (only once)*/
  function handleToss() {
    if (isTossed) {
      return;
    }
    let updateSalvesNodes = [...grid];
    let tossRes = getRandomInt(60, 70);
    for (let i = 0; i < tossRes; i++) {
      let randomRow = getRandomInt(0, rows - 1);
      let randomCol = getRandomInt(0, cols - 1);
      let node = updateSalvesNodes[randomRow][randomCol];
      if (!node.isWall && !node.isMine && !node.isSalve) {
        node.isSalve = true;
      }
    }
    setIsTossed(1);
    setGrid(updateSalvesNodes);
  }

  /*handle drop src/dest nodes on other nodes */
  const drop = (e) => {
    e.preventDefault();

    const node_id = e.dataTransfer.getData("node_id");
    const node = document.getElementById(node_id);
    node.style.display = "block";
    let temp = e.target.id.split("-");
    let i = parseInt(temp[1]);
    let j = parseInt(temp[2]);
    let _nodes = [...grid];
    let currNode = _nodes[i][j];
    if (currNode.isWall || currNode.isMine || currNode.isSalve) {
      return;
    }

    if (node.className.includes("src")) {
      let sNode = _nodes[startNode.row][startNode.col];
      sNode.isStart = false;
      sNode.value = Infinity;
      sNode.gCost = Infinity;
      currNode.isStart = true;
      currNode.value = 0;
      currNode.gCost = 0;

      setStartNode({ row: i, col: j });
    } else {
      let eNode = _nodes[endNode.row][endNode.col];
      eNode.isEnd = false;
      currNode.isEnd = true;
      setEndNode({ row: i, col: j });
    }

    setGrid(_nodes);
  };

  return (
    <Fragment>
      <Navbar
        grid={grid}
        rows={rows}
        cols={cols}
        startNode={startNode}
        endNode={endNode}
        handleClear={handleClear}
        handleMine={handleMine}
        handleWall={handleWall}
        mousePressed={mousePressed}
        handleToss={handleToss}
      />
      <Grid
        grid={grid}
        cols={cols}
        rows={rows}
        handleWallClick={handleWallClick}
        drop={drop}
      />
    </Fragment>
  );
}

export default App;

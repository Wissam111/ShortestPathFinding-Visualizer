import React, { Component } from "react";
import { useState } from "react";
import Node from "./Node";
import Dijkstra from "./algorithms/dijkstraAlgo";
function Grid() {
  const [nodes, setNodes] = useState([]);
  const [startNode, setStartNode] = useState({ row: 15, col: 13 });
  const [endNode, setEndNode] = useState({ row: 15, col: 50 });

  const rows = 30;
  const cols = 90;

  React.useEffect(() => {
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
          });
          count++;
        }
      }
      setNodes(_nodes);
    }
    createGrid();
  }, []);

  function anitmationDij(dijVisited) {
    for (let i = 0; i < dijVisited._visited.length; i++) {
      setTimeout(() => {
        const node = dijVisited._visited[i];
        document.getElementById(`node-${node.row}-${node.col}`).className =
          "Node node-visited";
      }, 10 * i);
    }
  }

  function handleDij() {
    let startNode = {};
    let destNode = {};
    nodes.forEach((node) => {
      if (node.isStart) {
        startNode = node;
      } else if (node.isEnd) {
        destNode = node;
      }
    });
    let resDij = Dijkstra(nodes, startNode, rows, cols, destNode);
    anitmationDij(resDij);
  }

  function handleWallClick(row, col) {
    console.log("row:", row, " col:", col);
    const updateWall = nodes.map((node) => {
      if (node.row == row && node.col == col) {
        return { ...node, isWall: true };
      }
      return node;
    });
    setNodes(updateWall);
  }

  return (
    <div className="container">
      <div className="grind-container">
        {nodes.map((node) => (
          <Node
            key={node.key}
            handleWallClick={handleWallClick}
            // handleWallClick={handleWallClick(node.row, node.col)}
            node={node}
          />
        ))}
      </div>
      <button onClick={handleDij}>Dij</button>
    </div>
  );
}

export default Grid;

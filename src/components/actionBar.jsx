import React, { Component, useState } from "react";
import Animation from "./animations/Animation";
import Dijkstra from "./algorithms/dijkstraAlgo";
import BFSAnimation from "./animations/BfsAnimation";
import AstartPathFinding from "./algorithms/AstartPathFindingAlgo";
function ActionBar(props) {
  const [currAlgo, setCurrAlgo] = useState("dijkstra");

  const handleDij = () => {
    let startNode = {};
    let destNode = {};
    props.nodes.forEach((node) => {
      if (node.isStart) {
        startNode = node;
      } else if (node.isEnd) {
        destNode = node;
      }
    });
    if (currAlgo == "dijkstra") {
      let resDij = Dijkstra(
        props.nodes,
        startNode,
        props.rows,
        props.cols,
        destNode
      );
      Animation(resDij);
    } else if (currAlgo == "BFS") {
      BFSAnimation(props.nodes, props.rows, props.cols);
    } else {
      let resAstart = AstartPathFinding(
        props.nodes,
        startNode,
        props.rows,
        props.cols,
        destNode
      );
      Animation(resAstart);
    }
  };

  const handleSelectAlgo = (e) => {
    setCurrAlgo(e.target.value);
  };
  return (
    <div className="action-bar">
      <img src={require("../imgs/gicon3b.png")} className="iconFind" alt="" />
      <div className="action-links">
        <div className="algo-selctor">
          <label>Pick Algo:</label>
          <select id="algos" name="algos" onChange={handleSelectAlgo}>
            <option value="dijkstra">Dijkstra</option>
            <option value="A*Pathfinding">A*Pathfinding</option>
            <option value="BFS">BFS</option>
          </select>
        </div>

        <button onClick={props.handleMine} className="actionBtn">
          Add Mines
        </button>

        <button onClick={props.handleClear} className="actionBtn clearBtn">
          Clear Grid
        </button>
        <button className="actionBtn runBtn" onClick={handleDij}>
          Run Algo
        </button>
        <button
          style={{
            color: !props.mousePressed ? "White" : "red",
          }}
          onClick={props.handleWall}
          className="actionBtn clearBtn"
        >
          {!props.mousePressed ? "Enable Wall" : "Disenable Wall"}
        </button>

        <button
          onClick={props.handleToss}
          className="actionBtn clearBtn tossCoinBtn"
        >
          <img src={require("../imgs/tossCoin.gif")} alt="" />
          Toss Coin
        </button>
      </div>
    </div>
  );
}

export default ActionBar;

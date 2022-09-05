import React, { Component, useState } from "react";
import anitmationDij from "./animations/dijAnimation";
import BFSAnimation from "./animations/BfsAnimation";
function ActionBar(props) {
  const [currAlgo, setCurrAlgo] = useState("dijkstra");

  const handleDij = () => {
    if (currAlgo == "dijkstra") {
      anitmationDij(props.nodes, props.rows, props.cols);
    } else if (currAlgo == "BFS") {
      BFSAnimation(props.nodes, props.rows, props.cols);
    } else {
      console.log("DFS");
    }
  };

  const handleSelectAlgo = (e) => {
    setCurrAlgo(e.target.value);
    console.log(e.target.value);
  };
  return (
    <div className="action-bar">
      <img src={require("../imgs/gicon3b.png")} className="iconFind" alt="" />
      <div className="action-links">
        <div className="algo-selctor">
          <label>Pick Algo:</label>
          <select id="algos" name="algos" onChange={handleSelectAlgo}>
            <option value="dijkstra">Dijkstra</option>
            <option value="DFS">DFS</option>
            <option value="BFS">BFS</option>
          </select>
        </div>

        <button onClick={props.handleMine} className="actionBtn">
          Add Mine
        </button>
        <button className="actionBtn runBtn" onClick={handleDij}>
          Run Algo
        </button>
        <button onClick={props.handleClear} className="actionBtn clearBtn">
          Clear Grid
        </button>
      </div>
    </div>
  );
}

export default ActionBar;

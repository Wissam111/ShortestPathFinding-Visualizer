import React, { Component } from "react";

function ActionBar() {
  return (
    <div className="action-bar">
      <div className="action-links">
        <img src={require("../imgs/gicon3b.png")} className="iconFind" alt="" />
        <div className="algo-selctor">
          <label for="cars">Pick Algo</label>
          <select id="algos" name="algos">
            <option value="dijkstra">Dijkstra</option>
            <option value="DFS">DFS</option>
            <option value="BFS">BFS</option>
          </select>
          <button>Run Algo</button>
        </div>
      </div>
    </div>
  );
}

export default ActionBar;

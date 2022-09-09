import React, { Component } from "react";
import Node from "./Node";
function Grid(props) {
  return (
    <div className="gridcontainer-layout">
      <div className="grind-container">
        {props.grid.map((row, nodeId) => {
          return (
            <div className="row" key={nodeId}>
              {row.map((node) => {
                return (
                  <Node
                    key={node.key}
                    handleWallClick={props.handleWallClick}
                    node={node}
                    drop={props.drop}
                  />
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Grid;

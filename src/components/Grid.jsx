import React, { Component } from "react";
import { useRef, useState } from "react";
import Node from "./Node";
function Grid(props) {
// const [nodes , rows , cols] = props;  


// console.log(props.nodes);
  return (
    <div className="gridcontainer-layout">
      <div
        className="grind-container"
      >
       {
       props.grid.map((row,nodeId)=>{
      return (
       <div className="row" key={nodeId}>
       {
        row.map((node)=>{
          return(
            <Node
            key={node.key}
            handleWallClick={props.handleWallClick}
            node={node}
            drop={props.drop}
          />
          )


        })


       }


       </div>

        
      )
         


        })
       }



        {/* {props.nodes.map((node) => (
          <Node
            key={node.key}
            handleWallClick={props.handleWallClick}
            node={node}
            drop={props.drop}
          />
        ))} */}
      </div>
    </div>
  );
}

export default Grid;
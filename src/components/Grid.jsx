import React, { Component } from "react";
import { useRef, useState } from "react";
import Node from "./Node";
function Grid(props) {
  const ref = useRef(null);

  const [width, setWidth] = useState(0);

  React.useEffect(() => {
    let w = Math.floor(ref.current.offsetWidth / 20) - 5;
    setWidth(w);
  }, []);

  React.useEffect(() => {
    function handleResize() {
      let w = Math.floor(ref.current.offsetWidth / 20) - 5;
      setWidth(w);
    }
    console.log(width);
    window.addEventListener("resize", handleResize);
  });
  function handleChange(event) {
    props.onChange(event.target.value);
  }

  return (
    <div className="container">
      <div
        style={{
          gridTemplateColumns: `repeat(${width}, 20px)`,
        }}
        ref={ref}
        className="grind-container"
      >
        {props.nodes.map((node) => (
          <Node
            key={node.key}
            handleWallClick={props.handleWallClick}
            node={node}
            drop={props.drop}
          />
        ))}
      </div>
      <input value={width} onChange={handleChange} />
    </div>
  );
}

export default Grid;

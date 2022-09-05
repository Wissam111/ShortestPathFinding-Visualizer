import BFS from "../algorithms/BFS";

function BFSAnimation(nodes, rows, cols) {
  let startNode = {};
  let destNode = {};
  nodes.forEach((node) => {
    if (node.isStart) {
      startNode = node;
    } else if (node.isEnd) {
      destNode = node;
    }
  });
  let bfsOrder = BFS(nodes, rows, cols, startNode, destNode);
  // console.log(bfsOrder);
  BfsStart(bfsOrder);
}
export default BFSAnimation;

function BfsStart(bfsOrder) {
  for (let i = 0; i < bfsOrder.length; i++) {
    setTimeout(() => {
      const node = bfsOrder[i];
      document.getElementById(`node-${node.row}-${node.col}`).className =
        "Node node-visited";
    }, 10 * i);
  }
}

function BFS(nodes, rows, cols, startNode, endNode) {
  let exploreList = [];
  exploreList.push(startNode);
  let visitedNodes = [];
  //   console.log(exploreList);
  while (exploreList != 0) {
    let currNode = exploreList.shift();
    if (currNode.row == endNode.row && currNode.col == endNode.col) {
      break;
    }
    if (currNode.isWall) {
      continue;
    }

    visitedNodes.push(currNode);

    Explore(nodes, exploreList, rows, cols, currNode.row + 1, currNode.col);
    Explore(nodes, exploreList, rows, cols, currNode.row - 1, currNode.col);
    Explore(nodes, exploreList, rows, cols, currNode.row, currNode.col + 1);
    Explore(nodes, exploreList, rows, cols, currNode.row, currNode.col - 1);
  }
  console.log(visitedNodes);
  return visitedNodes;
}
export default BFS;
function Explore(nodes, exploreList, rows, cols, i, j) {
  let neighborNode = nodes.find((node) => node.row == i && node.col == j);
  if (i >= rows || j >= cols || i < 0 || j < 0 || neighborNode.visited) {
    return;
  }
  neighborNode.visited = true;
  exploreList.push(neighborNode);
}

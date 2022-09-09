/* BFS Algorithm implementation */

function BFS(grid, startNode, rows, cols, endNode) {
  let exploreList = [];
  exploreList.push(startNode);
  let visitedNodes = [];
  while (exploreList != 0) {
    let currNode = exploreList.shift();
    if (currNode.row == endNode.row && currNode.col == endNode.col) {
      break;
    }
    if (currNode.isWall) {
      continue;
    }

    visitedNodes.push(currNode);

    Explore(grid, exploreList, rows, cols, currNode.row + 1, currNode.col);
    Explore(grid, exploreList, rows, cols, currNode.row - 1, currNode.col);
    Explore(grid, exploreList, rows, cols, currNode.row, currNode.col + 1);
    Explore(grid, exploreList, rows, cols, currNode.row, currNode.col - 1);
  }
  return { _visited: visitedNodes, shortPath: [] };
}
export default BFS;
function Explore(grid, exploreList, rows, cols, i, j) {
  if (i >= rows || j >= cols || i < 0 || j < 0) {
    return;
  }
  let neighborNode = grid[i][j];
  if (neighborNode.visited) {
    return;
  }
  neighborNode.visited = true;
  exploreList.push(neighborNode);
}

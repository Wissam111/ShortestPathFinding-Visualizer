/* Dijksta Algorithm implementation */

import MinHeap from "../data-structure/MinHeap";
function Dijkstra(grid, startNode, rows, cols, endNode) {
  let distances = new MinHeap();
  distances.insert(startNode);
  let _visited = [];
  let shortPaths = [];

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let obN = { path: [] };
      obN.path.push(startNode);
      shortPaths.splice(grid[i][j].id, 0, obN);
    }
  }

  while (distances != 0) {
    let currNode = distances.extractMin();

    if (currNode.row == endNode.row && currNode.col == endNode.col) {
      break;
    }
    if (currNode.isWall) {
      continue;
    }
    _visited.push(currNode);

    relax(
      grid,
      distances,
      currNode,
      currNode.row - 1,
      currNode.col,
      shortPaths,
      rows,
      cols
    );
    relax(
      grid,
      distances,
      currNode,
      currNode.row + 1,
      currNode.col,
      shortPaths,
      rows,
      cols
    );
    relax(
      grid,
      distances,
      currNode,
      currNode.row,
      currNode.col - 1,
      shortPaths,
      rows,
      cols
    );
    relax(
      grid,
      distances,
      currNode,
      currNode.row,
      currNode.col + 1,
      shortPaths,
      rows,
      cols
    );
  }
  let spDest = shortPaths[endNode.id].path;

  return { _visited: _visited, shortPath: spDest };
}

function relax(grid, dist, currNode, i, j, shortPaths, rows, cols) {
  if (i >= rows || j >= cols || i < 0 || j < 0) {
    return;
  }
  let currWeight = currNode.value;
  let currNdPath = [...shortPaths[currNode.id].path];
  let neighborNode = grid[i][j];
  let w;
  let m = neighborNode.isSalve
    ? currWeight > 3
      ? -3
      : 0
    : neighborNode.isMine
    ? 10
    : 1;
  w = currWeight + m;

  if (neighborNode.isSalve) {
    neighborNode.isSalve = false;
  }
  if (w < neighborNode.value) {
    currNdPath.push(neighborNode);
    shortPaths[neighborNode.id].path = currNdPath;
    neighborNode.value = w;
    dist.insert(neighborNode);
  }
}
export default Dijkstra;

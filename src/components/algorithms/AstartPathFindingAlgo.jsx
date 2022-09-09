import MinHeap from "../data-structure/MinHeap";

const moveStaight = 10;
const moveDiagonal = 14;
let distances = new MinHeap();
let shortPaths = [];

//fCost is value

function AstartPathFinding(grid, startNode, rows, cols, endNode) {
  distances.insert(startNode);
  let _visited = [];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let obN = { path: [] };
      obN.path.push(startNode);
      shortPaths.splice(grid[i][j].id, 0, obN);
    }
  }
  startNode.hCost = CalculateDistanceCost(startNode, endNode);
  startNode.value = startNode.gCost + startNode.hCost;
  while (distances != 0) {
    let currNode = distances.extractMin();
    if (currNode.row == endNode.row && currNode.col == endNode.col) {
      break;
    }
    if (currNode.isWall) {
      continue;
    }
    _visited.push(currNode);
    currNode.visited = true;
    let neighborsList = getNeighborsList(grid, currNode, rows, cols);

    for (let i = 0; i < neighborsList.length; i++) {
      let neighborNode = neighborsList[i];

      if (neighborNode.visited) {
        continue;
      }
      let currNdPath = [...shortPaths[currNode.id].path];
      let cost = currNode.gCost + CalculateDistanceCost(currNode, neighborNode);
      let m = neighborNode.isSalve
        ? cost > 3
          ? -3
          : 0
        : neighborNode.isMine
        ? 10
        : 1;

      cost = cost + m;

      if (cost < neighborNode.gCost) {
        currNdPath.push(neighborNode);
        neighborNode.gCost = cost;
        neighborNode.hCost = CalculateDistanceCost(neighborNode, endNode);
        neighborNode.value = neighborNode.gCost + neighborNode.hCost;
        distances.insert(neighborNode);
        shortPaths[neighborNode.id].path = currNdPath;
      }
    }
  }
  let spDest = shortPaths[endNode.id].path;
  return { _visited: _visited, shortPath: spDest };
}

export default AstartPathFinding;

function CalculateDistanceCost(a, b) {
  let xDist = Math.abs(a.row - b.row);
  let yDist = Math.abs(a.col - b.col);
  let remm = Math.abs(xDist - yDist);

  return moveDiagonal * Math.min(xDist, yDist) + moveStaight * remm;
}

function getNeighborsList(grid, currNode, rows, cols) {
  let neighborsList = [];

  insertNode(grid, currNode.row - 1, currNode.col, neighborsList, rows, cols);
  insertNode(grid, currNode.row + 1, currNode.col, neighborsList, rows, cols);
  insertNode(grid, currNode.row, currNode.col - 1, neighborsList, rows, cols);
  insertNode(grid, currNode.row, currNode.col + 1, neighborsList, rows, cols);

  return neighborsList;
}

function insertNode(grid, i, j, neighborsList, rows, cols) {
  if (i >= rows || j >= cols || i < 0 || j < 0) {
    return;
  }

  // let neighborNode = grid.find((node) => node.row == i && node.col == j);
  let neighborNode = grid[i][j];
  neighborsList.push(neighborNode);
}

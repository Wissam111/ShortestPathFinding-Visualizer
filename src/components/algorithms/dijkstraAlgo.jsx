function Dijkstra(grid, startNode, rows, cols, endNode) {
  let distances = [];

  let _visited = [];
  distances.splice(startNode.id, 0, startNode);
  let shortPaths = [];
  for (let i = 0; i < grid.length; i++) {
    let obN = { path: [] };

    shortPaths.splice(grid[i].id, 0, obN);
  }

  while (distances != 0) {
    distances.sort(compare);
    let currNode = distances.shift();

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

function compare(a, b) {
  if (a.value < b.value) {
    return -1;
  }
  if (a.value > b.value) {
    return 1;
  }
  return 0;
}

function relax(grid, dist, currNode, i, j, shortPaths, rows, cols) {
  if (i >= rows || j >= cols || i < 0 || j < 0) {
    return;
  }
  let currWeight = currNode.value;
  let currNdPath = [...shortPaths[currNode.id].path];
  let neighborNode = grid.find((node) => node.row == i && node.col == j);

  if (currWeight + 1 < neighborNode.value) {
    currNdPath.push(neighborNode);

    shortPaths[neighborNode.id].path = currNdPath;
    neighborNode.value = currWeight + 1;
    dist.splice(neighborNode.id, 0, neighborNode);
  }
}
export default Dijkstra;

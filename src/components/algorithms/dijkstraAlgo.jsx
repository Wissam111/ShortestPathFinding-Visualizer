function compare(a, b) {
  if (a.value < b.value) {
    return -1;
  }
  if (a.value > b.value) {
    return 1;
  }
  return 0;
}
function relax(_nodes, neighborNode, currNode, shortestPathMap) {
  if (!neighborNode) {
    return;
  }
  let sp = shortestPathMap.find(
    (nodesPath) => nodesPath.id == currNode.id
  ).pathNodes;
  let w = currNode.value + 1;
  if (w < neighborNode.value) {
    let curr_sp = sp.push(neighborNode);
    // shortestPathMap[neighborNode.id].path = curr_sp;
    shortestPathMap.find(
      (nodesPath) => nodesPath.id == neighborNode.id
    ).pathNodes = curr_sp;
    neighborNode.value = w;
  }
}

function getNode(nodes, i, j, rows, cols) {
  if (i >= rows || j >= cols || i < 0 || j < 0) {
    return;
  }
  let neighborNode = nodes.find((node) => node.row == i && node.col == j);

  return neighborNode;
}
function insert(visted, v) {
  if (v) {
    visted.push(v);
  }
}

function Dijkstra(nodes, startNode, rows, cols, dest) {
  let _visited = [];
  let _nodes = [...nodes].sort(compare);
  let shortestPathMap = [];
  nodes.forEach((node) => {
    shortestPathMap.push({ id: node.id, pathNodes: [] });
  });

  while (_nodes.length != 0) {
    // console.log(typeof _nodes);
    let currNode = _nodes.shift();
    if (currNode.row == dest.row && currNode.col == dest.col) {
      break;
    }
    if (currNode.isWall) {
      continue;
    }

    insert(_visited, currNode);
    let v1 = getNode(nodes, currNode.row - 1, currNode.col, rows, cols);
    let v2 = getNode(nodes, currNode.row + 1, currNode.col, rows, cols);
    let v3 = getNode(nodes, currNode.row, currNode.col - 1, rows, cols);
    let v4 = getNode(nodes, currNode.row, currNode.col + 1, rows, cols);
    relax(_nodes, v1, currNode, shortestPathMap);
    relax(_nodes, v2, currNode, shortestPathMap);
    relax(_nodes, v3, currNode, shortestPathMap);
    relax(_nodes, v4, currNode, shortestPathMap);
    _nodes = _nodes.sort(compare);
  }
  console.log(shortestPathMap[dest.id].pathNodes);
  return { _visited: _visited, shortPath: shortestPathMap[dest.id].path };
}
export default Dijkstra;

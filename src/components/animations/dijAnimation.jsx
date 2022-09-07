import Dijkstra from "../algorithms/dijkstraAlgo";

function anitmationDij(nodes, rows, cols) {
  let startNode = {};
  let destNode = {};
  nodes.forEach((node) => {
    if (node.isStart) {
      startNode = node;
    } else if (node.isEnd) {
      destNode = node;
    }
  });

  let resDij = Dijkstra(nodes, startNode, rows, cols, destNode);
  anitmationStart(resDij);
}
export default anitmationDij;

async function anitmationStart(dijVisited) {
  for (let i = 0; i <= dijVisited._visited.length; i++) {
    if (i == dijVisited._visited.length) {
      setTimeout(() => {
        anitmationSP(dijVisited);
      }, 10 * i);
      return;
    }
    setTimeout(() => {
      const node = dijVisited._visited[i];
      let nodeDom = document.getElementById(`node-${node.row}-${node.col}`);
      nodeDom.className = "Node node-visited";
    }, 10 * i);
  }
}

async function anitmationSP(dijVisited) {
  for (let i = 0; i < dijVisited.shortPath.length; i++) {
    const node = dijVisited.shortPath[i];

    let nodeDom = document.getElementById(`node-${node.row}-${node.col}`);
    nodeDom.className = "Node node-sp frog";
    await sleep(200);
    nodeDom.classList.remove("frog");
  }
}
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

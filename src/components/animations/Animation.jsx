// import Dijkstra from "../algorithms/dijkstraAlgo";
// import AstartPathFinding from "../algorithms/AstartPathFindingAlgo";
function Animation(algoResult) {
  // let resDij = Dijkstra(nodes, startNode, rows, cols, destNode);
  // let resDij = AstartPathFinding(nodes, startNode, destNode, rows, cols);
  // console.log(resDij);
  animationStart(algoResult);
}
export default Animation;

async function animationStart(dijVisited) {
  for (let i = 0; i <= dijVisited._visited.length; i++) {
    if (i == dijVisited._visited.length) {
      setTimeout(() => {
        animationSP(dijVisited);
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

async function animationSP(dijVisited) {
  for (let i = 0; i < dijVisited.shortPath.length; i++) {
    const node = dijVisited.shortPath[i];

    let nodeDom = document.getElementById(`node-${node.row}-${node.col}`);
    nodeDom.className = "Node node-sp frog";
    await sleep(200);
    nodeDom.classList.remove("frog");
  }
}
const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

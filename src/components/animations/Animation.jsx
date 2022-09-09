/*Animation component */

function Animation(algoResult) {
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

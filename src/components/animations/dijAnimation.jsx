// function anitmationStart(dijVisited) {
//   for (let i = 0; i <= dijVisited._visited.length; i++) {
//     if (i == dijVisited._visited.length) {
//       setTimeout(() => {
//         anitmationSP(dijVisited);
//       }, 10 * i);
//       return;
//     }
//     setTimeout(() => {
//       const node = dijVisited._visited[i];

//       document.getElementById(`node-${node.row}-${node.col}`).className =
//         "Node node-visited";
//     }, 10 * i);
//   }
// }
// export default anitmationDij;

// function anitmationSP(dijVisited) {
//   for (let i = 0; i < dijVisited.shortPath.length; i++) {
//     setTimeout(() => {
//       const node = dijVisited.shortPath[i];
//       document.getElementById(`node-${node.row}-${node.col}`).className =
//         "node node-sp";
//     }, 10 * i);
//   }
// }

// function anitmationDij(nodes) {
//   let startNode = {};
//   let destNode = {};
//   nodes.forEach((node) => {
//     if (node.isStart) {
//       startNode = node;
//     } else if (node.isEnd) {
//       destNode = node;
//     }
//   });
//   let resDij = Dijkstra(nodes, startNode, rows, cols, destNode);
//   anitmationStart(resDij);
// }

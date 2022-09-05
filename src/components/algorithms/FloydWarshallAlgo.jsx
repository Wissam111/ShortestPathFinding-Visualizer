function FloydWarshall(nodes, row, cols) {
  var dist = Array.from(Array(this.V), () => new Array(this.V).fill(0));
  let i, j, k;

  for (i = 0; i < this.V; i++) {
    for (j = 0; j < this.V; j++) {
      if (Math.abs(i - j) == 1) dist[i][j] = graph[i][j];
    }
  }
}

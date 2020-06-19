class CaveGraph {
  constructor() {
    this.adjacencyList = new Map();
    this.addNodesToAdjacencyList();
    this.addEdgesToAdjacencyList();
  }

  addNode(node) {
    this.adjacencyList.set(node, []);
  }

  addEdge(node, otherNode) {
    this.adjacencyList.get(node).push(otherNode);
    this.adjacencyList.get(otherNode).push(node);
  }

  addNodesToAdjacencyList() {
    for (var nodeNumber of Array(25).keys()) {
      this.addNode(nodeNumber);
    }
  }

  addEdgesToAdjacencyList() {
    this.addEdge(0, 1);
    this.addEdge(0, 3);

    this.addEdge(2, 1);
    this.addEdge(2, 4);

    this.addEdge(5, 3);
    this.addEdge(5, 6);
    this.addEdge(5, 8);

    this.addEdge(7, 4);
    this.addEdge(7, 6);
    this.addEdge(7, 9);

    this.addEdge(10, 8);
    this.addEdge(10, 11);
    this.addEdge(10, 13);

    this.addEdge(12, 9);
    this.addEdge(12, 11);
    this.addEdge(12, 14);

    // Cave Entrance
    this.addEdge(15, 13);
    this.addEdge(15, 16);
    this.addEdge(15, 18);

    this.addEdge(17, 14);
    this.addEdge(17, 16);
    this.addEdge(17, 19);

    this.addEdge(20, 18);
    this.addEdge(20, 21);

    this.addEdge(22, 19);
    this.addEdge(22, 21);
    this.addEdge(22, 23);

    this.addEdge(24, 23);
  }

  printGraph() {
    let nodes = this.adjacencyList.keys();
    for (var node of nodes) {
      var connectedNodes = this.adjacencyList.get(node);
      var connectionSummary = '';

      for (var connectedNode of connectedNodes) {
        connectionSummary += ' ' + connectedNode;
      }

      console.log(node + ' ->' + connectionSummary);
    }
  }
}

export default CaveGraph;

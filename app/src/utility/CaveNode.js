class CaveNode {
  constructor (nodeIndex) {
    this.nodeIndex = nodeIndex;

    this.adjacentNodes = [];
    this.isOccupied = false;
    this.ROOM = 'ROOM';
    this.WALL = 'WALL';
  }

  getNodeIndex() {
    return this.nodeIndex;
  }

  addAdjacentNode(node) {
    this.adjacentNodes.push(node);
  }

  getAdjacentNodes() {
    return this.adjacentNodes;
  }

  isNodeOccupied() {
    return this.isOccupied;
  }

  markOccupied() {
    this.isOccupied = true;
  }
}

export default CaveNode;

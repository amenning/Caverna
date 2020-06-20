import * as CaveTiles from './CaveTiles';

class CaveNode {
  constructor (nodeIndex) {
    this.nodeIndex = nodeIndex;

    this.adjacentNodes = [];
    this.nodeTile = CaveTiles.EMPTY_TILE;
    this.ROOM = 'ROOM';
    this.WALL = 'WALL';
  }

  getNodeIndex () {
    return this.nodeIndex;
  }

  addAdjacentNode (node) {
    this.adjacentNodes.push(node);
  }

  getAdjacentNodes () {
    return this.adjacentNodes;
  }

  isNodeOccupied () {
    return this.nodeTile != CaveTiles.EMPTY_TILE;
  }

  markOccupiedWith (tile) {
    this.nodeTile = tile;
  }

  getNodeTileType () {
    return this.nodeTile;
  }
}

export default CaveNode;

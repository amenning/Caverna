import CaveNode from './CaveNode';

class CaveWallNode extends CaveNode {
  addAdjacentRoomNode(node) {
    this.addAdjacentNode(node);
  }

  getNodeType() {
    return this.WALL;
  }
}

export default CaveWallNode;

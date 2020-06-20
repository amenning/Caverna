import CaveNode from './CaveNode';

class CaveWallNode extends CaveNode {
  addAdjacentRoomNode(node) {
    this.addAdjacentNode(node);
  }

  getNodeType() {
    return 'WALL';
  }
}

export default CaveWallNode;

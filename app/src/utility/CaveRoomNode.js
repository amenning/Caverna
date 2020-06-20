import CaveNode from './CaveNode';

class CaveRoomNode extends CaveNode {
  addAdjacentWallNode (node) {
    this.addAdjacentNode(node);
  }

  getNodeType () {
    return this.ROOM;
  }
}

export default CaveRoomNode;

import CaveRoomNode from './CaveRoomNode';
import CaveWallNode from './CaveWallNode';

class CaveGraph {
  constructor() {
    this.caveNodes = new Map();
    this.createCaveNodes();
    this.associatedRoomNodesWithWallNodes();
    this.markExistingWalls();
    this.markRoomsStartingFilledWithRocks();
  }

  createCaveNodes() {
    const caveWallNodeIndexes = [
      0, 1,
      2, 4, 6,
      7, 8,
      9, 11, 13,
      14, 15,
      16, 18, 20,
      21, 22,
      23, 25, 27,
      28, 29, 30,
      31, 33, 35, 37,
      38, 39, 40
    ];

    for (var caveWallNodeIndex of caveWallNodeIndexes) {
      this.createCaveWallNodeForNodeIndex(caveWallNodeIndex);
    }

    const caveRoomNodeIndexes = [
      3, 5,
      10, 12,
      17, 19,
      24, 26,
      32, 34, 36
    ];

    for (var caveRoomNodeIndex of caveRoomNodeIndexes) {
      this.createCaveRoomNodeForNodeIndex(caveRoomNodeIndex);
    }
  }

  associatedRoomNodesWithWallNodes() {
    this.caveRoomWallIndexMap = new Map();
    this.caveRoomWallIndexMap.set(3, [0, 2, 4, 7]);
    this.caveRoomWallIndexMap.set(5, [1, 4, 6, 8]);
    this.caveRoomWallIndexMap.set(10, [7, 9, 11, 14]);
    this.caveRoomWallIndexMap.set(12, [8, 11, 13, 15]);
    this.caveRoomWallIndexMap.set(17, [14, 16, 18, 21]);
    this.caveRoomWallIndexMap.set(19, [15, 18, 20, 22]);
    this.caveRoomWallIndexMap.set(24, [21, 23, 25, 28]);
    this.caveRoomWallIndexMap.set(26, [22, 25, 27, 29]);
    this.caveRoomWallIndexMap.set(32, [28, 31, 33, 38]);
    this.caveRoomWallIndexMap.set(34, [29, 33, 35, 39]);
    this.caveRoomWallIndexMap.set(36, [30, 35, 37, 40]);

    for (var caveRoomWallIndex of this.caveRoomWallIndexMap.keys()) {
      let caveWallIndexes = this.caveRoomWallIndexMap.get(caveRoomWallIndex);
      this.associatedRoomNodeIndexWithWallNodeIndexes(
        caveRoomWallIndex,
        caveWallIndexes
      );
    }
  }

  markExistingWalls() {
    const permanentWallIndexes = [
      0, 1,
      2, 6,
      9, 13,
      16, 20,
      27,
      30,
      31, 37,
      38, 39, 40
    ];

    for (var wallIndex of permanentWallIndexes) {
      this.caveNodes.get(wallIndex).markOccupied();
    }
  }

  markRoomsStartingFilledWithRocks() {
    const roomsIndexesWithRocks = [
      3, 5,
      10, 12,
      19,
      26,
      32, 34, 36
    ];

    for (var roomIndex of roomsIndexesWithRocks) {
      this.caveNodes.get(roomIndex).markOccupied();
    }
  }

  createCaveRoomNodeForNodeIndex(nodexIndex) {
    const caveRoom = new CaveRoomNode(nodexIndex);
    this.caveNodes.set(nodexIndex, caveRoom);
  }

  createCaveWallNodeForNodeIndex(nodexIndex) {
    const caveWall = new CaveWallNode(nodexIndex);
    this.caveNodes.set(nodexIndex, caveWall);
  }

  associatedRoomNodeIndexWithWallNodeIndexes(roomNodeIndex, wallNodeIndexes) {
    let roomNode = this.caveNodes.get(roomNodeIndex);
    for (let wallNodeIndex of wallNodeIndexes) {
      let wallNode = this.caveNodes.get(wallNodeIndex);
      wallNode.addAdjacentRoomNode(roomNode);
      roomNode.addAdjacentWallNode(wallNode);
    }
  }

  printGraph() {
    for (var nodeIndex of this.caveNodes.keys()) {
      var node = this.caveNodes.get(nodeIndex);
      var adjacentNodes = node.getAdjacentNodes();
      var connectionSummary = '';

      for (var adjacentNode of adjacentNodes) {
        connectionSummary += ' ' + adjacentNode.getNodeType() + '-' + adjacentNode.getNodeIndex()
          + (adjacentNode.isNodeOccupied() ? '(*)' : '()');
      }

      console.log(
        node.getNodeType() + ' ' + node.getNodeIndex() + (node.isNodeOccupied() ? '(*)' : '()')
          + ' ->' + connectionSummary
      );
    }
  }
}

export default CaveGraph;

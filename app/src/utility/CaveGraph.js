import CaveRoomNode from './CaveRoomNode';
import CaveWallNode from './CaveWallNode';
import Queue from './Queue';

/**
 * This creates a graph of the various cave locations.
 * The node indexes are as follows with () denoting a room.
 * The nodes without () are wall locations. The cave entrance room is node 24
 *
 *       0       1
 *   2  (3)  4  (5)  6
 *       7       8
 *   9 (10) 11 (12) 13
 *      14      15
 *  16 (17) 18 (19) 20
 *      21      22
 *  23 (24) 25 (26) 27
 *      28      29      30
 *  31 (32) 33 (34) 35 (36) 37
 *      38      39      40
 *
 */
class CaveGraph {
  constructor () {
    this.caveNodes = new Map();
    this.entranceCaveRoomIndex = 24;
    this.createCaveNodes();
    this.associatedRoomNodesWithWallNodes();
    this.markExistingWalls();
    this.markRoomsStartingFilledWithRocks();
  }

  createCaveNodes () {
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

  associatedRoomNodesWithWallNodes () {
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

  markExistingWalls () {
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

  markRoomsStartingFilledWithRocks () {
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

  createCaveRoomNodeForNodeIndex (nodexIndex) {
    const caveRoom = new CaveRoomNode(nodexIndex);
    this.caveNodes.set(nodexIndex, caveRoom);
  }

  createCaveWallNodeForNodeIndex (nodexIndex) {
    const caveWall = new CaveWallNode(nodexIndex);
    this.caveNodes.set(nodexIndex, caveWall);
  }

  associatedRoomNodeIndexWithWallNodeIndexes (roomNodeIndex, wallNodeIndexes) {
    let roomNode = this.caveNodes.get(roomNodeIndex);
    for (let wallNodeIndex of wallNodeIndexes) {
      let wallNode = this.caveNodes.get(wallNodeIndex);
      wallNode.addAdjacentRoomNode(roomNode);
      roomNode.addAdjacentWallNode(wallNode);
    }
  }

  getRoomNodeIndexesThatCanBeExcavated () {
    const visitedIndexes = Array(this.caveNodes.size).fill().map((_, i) => false);
    const roomNodeIndexesThatCanBeExcavated = [];

    const queue = new Queue();
    let entranceRoom = this.caveNodes.get(this.entranceCaveRoomIndex);

    visitedIndexes[entranceRoom.getNodeIndex] = true;
    queue.enqueue(entranceRoom);

    while (!queue.isEmpty()) {
      let currentNode = queue.dequeue();

      let adjacentNodes = currentNode.getAdjacentNodes();

      for (var adjacentNode of adjacentNodes) {
        if (!visitedIndexes[adjacentNode.getNodeIndex()]) {
          visitedIndexes[adjacentNode.getNodeIndex()] = true;

          if (!adjacentNode.isNodeOccupied()) {
            queue.enqueue(adjacentNode);
          } else if (adjacentNode.getNodeType() == adjacentNode.ROOM) {
            roomNodeIndexesThatCanBeExcavated.push(adjacentNode.getNodeIndex());
          }
        }
      }
    }

    return roomNodeIndexesThatCanBeExcavated.sort();
  }

  printGraph () {
    for (var nodeIndex of this.caveNodes.keys()) {
      let node = this.caveNodes.get(nodeIndex);
      let adjacentNodes = node.getAdjacentNodes();
      let connectionSummary = '';

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

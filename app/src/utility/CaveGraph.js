import CaveRoomNode from './CaveRoomNode';
import CaveWallNode from './CaveWallNode';
import Queue from './Queue';
import * as CaveTiles from './CaveTiles';

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
  defaultOccupancyJson = {
    0: CaveTiles.WALL_TILE,
    1: CaveTiles.WALL_TILE,
    2: CaveTiles.WALL_TILE,
    3: CaveTiles.ROCK_TILE,
    4: CaveTiles.EMPTY_TILE,
    5: CaveTiles.ROCK_TILE,
    6: CaveTiles.WALL_TILE,
    7: CaveTiles.EMPTY_TILE,
    8: CaveTiles.EMPTY_TILE,
    9: CaveTiles.WALL_TILE,
    10: CaveTiles.ROCK_TILE,
    11: CaveTiles.EMPTY_TILE,
    12: CaveTiles.ROCK_TILE,
    13: CaveTiles.WALL_TILE,
    14: CaveTiles.EMPTY_TILE,
    15: CaveTiles.EMPTY_TILE,
    16: CaveTiles.WALL_TILE,
    17: CaveTiles.EMPTY_TILE,
    18: CaveTiles.EMPTY_TILE,
    19: CaveTiles.ROCK_TILE,
    20: CaveTiles.WALL_TILE,
    21: CaveTiles.EMPTY_TILE,
    22: CaveTiles.EMPTY_TILE,
    23: CaveTiles.CAVE_ENTRANCE_THRESHOLD,
    24: CaveTiles.CAVE_ENTRANCE_TILE,
    25: CaveTiles.EMPTY_TILE,
    26: CaveTiles.ROCK_TILE,
    27: CaveTiles.WALL_TILE,
    28: CaveTiles.EMPTY_TILE,
    29: CaveTiles.EMPTY_TILE,
    30: CaveTiles.WALL_TILE,
    31: CaveTiles.WALL_TILE,
    32: CaveTiles.ROCK_TILE,
    33: CaveTiles.EMPTY_TILE,
    34: CaveTiles.ROCK_TILE,
    35: CaveTiles.EMPTY_TILE,
    36: CaveTiles.ROCK_TILE,
    37: CaveTiles.WALL_TILE,
    38: CaveTiles.WALL_TILE,
    39: CaveTiles.WALL_TILE,
    40: CaveTiles.WALL_TILE
  }

  caveWallNodeIndexes = [
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
  ]

  caveRoomNodeIndexes = [
    3, 5,
    10, 12,
    17, 19,
    24, 26,
    32, 34, 36
  ]

  entranceWallNodeIndex = 23;
  entranceCaveRoomIndex = 24;

  constructor (occupancyJson) {
    this.occupancyJson = occupancyJson || this.defaultOccupancyJson;
    this.caveNodes = new Map();

    this.createCaveNodes();

    this.associatedRoomNodesWithWallNodes();

    this.populateCaveNodesWithTiles(occupancyJson);

    this.caveNodes.get(this.entranceWallNodeIndex)
      .markOccupiedWith(CaveTiles.CAVE_ENTRANCE_THRESHOLD);
    this.caveNodes.get(this.entranceCaveRoomIndex)
      .markOccupiedWith(CaveTiles.CAVE_ENTRANCE_TILE);
  }

  createCaveNodes () {
    for (var caveWallNodeIndex of this.caveWallNodeIndexes) {
      this.createCaveWallNodeForNodeIndex(caveWallNodeIndex);
    }

    for (var caveRoomNodeIndex of this.caveRoomNodeIndexes) {
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

  populateCaveNodesWithTiles () {
    for (var caveNodeIndex of this.caveNodes.keys()) {
      this.caveNodes.get(caveNodeIndex)
        .markOccupiedWith(this.occupancyJson[caveNodeIndex]);
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
          } else if (adjacentNode.getNodeType() == adjacentNode.ROOM
            && adjacentNode.getNodeTileType() == CaveTiles.ROCK_TILE) {
            roomNodeIndexesThatCanBeExcavated.push(adjacentNode.getNodeIndex());
          }
        }
      }
    }

    return roomNodeIndexesThatCanBeExcavated.sort();
  }

  getRoomNodeIndexesThatAreUnoccupied () {
    let unoccupiedRoomNodeIndexes = [];
    let node;
    for (var nodeIndex of this.caveRoomNodeIndexes) {
      node = this.caveNodes.get(nodeIndex);
      if (node.getNodeType() == node.ROOM && !node.isNodeOccupied()) {
        unoccupiedRoomNodeIndexes.push(node.getNodeIndex());
      }
    }

    return unoccupiedRoomNodeIndexes;
  }

  getWallNodeIndexesThatAreUnoccupied () {
    let unoccupiedWallNodeIndexes = [];
    let node;
    for (var nodeIndex of this.caveWallNodeIndexes) {
      node = this.caveNodes.get(nodeIndex);
      if (node.getNodeType() == node.WALL && !node.isNodeOccupied()) {
        unoccupiedWallNodeIndexes.push(node.getNodeIndex());
      }
    }

    return unoccupiedWallNodeIndexes;
  }

  getOccupancyJson () {
    const occupancyJson = {};
    let node;
    for (var nodeIndex of this.caveNodes.keys()) {
      node = this.caveNodes.get(nodeIndex);
      occupancyJson[nodeIndex] = node.getNodeTileType();
    }

    return occupancyJson;
  }

  setOccupancyJson (occupancyJson) {
    this.occupancyJson = occupancyJson;
    this.populateCaveNodesWithTiles();
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

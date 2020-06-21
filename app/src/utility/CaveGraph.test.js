import CaveGraph from './CaveGraph';
import * as CaveTiles from './CaveTiles';

it('should create a CaveGraph consisting of 41 nodes', () => {
  const caveGraph = new CaveGraph();
  expect(caveGraph.caveNodes.size).toBe(41);
});

it('should create 11 rooms and 30 wall nodes', () => {
  const caveGraph = new CaveGraph();
  const roomTotal = getNodeTypeCount(caveGraph, 'ROOM');
  const wallTotal = getNodeTypeCount(caveGraph, 'WALL');

  expect(roomTotal).toBe(11);
  expect(wallTotal).toBe(30);
});

it('should have 10 rooms filled (9 with rock and 1 with cave entrance tile)', () => {
  const caveGraph = new CaveGraph();
  const filledRoomCount = [...caveGraph.caveNodes.keys()].reduce(
    (nodeTypeTotal, nodeIndex) => {
      const node = caveGraph.caveNodes.get(nodeIndex);
      return nodeTypeTotal + (node.getNodeType() == node.ROOM && node.isNodeOccupied());
    },
    0
  );

  expect(filledRoomCount).toBe(10);
});

it('should have 15 walls present', () => {
  const caveGraph = new CaveGraph();
  const wallPresentCount = [...caveGraph.caveNodes.keys()].reduce(
    (wallTotal, nodeIndex) => {
      const node = caveGraph.caveNodes.get(nodeIndex);
      if (node.getNodeType() == node.WALL
        && node.isNodeOccupied()
        && node.getNodeTileType() == CaveTiles.WALL_TILE) {
        return wallTotal + 1;
      }

      return wallTotal;
    },
    0
  );

  expect(wallPresentCount).toBe(15);
});

it('should return the correct starting room indexes that can be excavated', () => {
  const caveGraph = new CaveGraph();

  expect(caveGraph.getRoomNodeIndexesThatCanBeExcavated()).toEqual([10, 19, 26, 32]);
})

it('should return the correct room indexes where room tiles can be placed', () => {
  const caveGraph = new CaveGraph();

  expect(caveGraph.getRoomNodeIndexesThatAreUnoccupied()).toEqual([17]);
})

it('should return the correct wall indexes where new wall tiles can be placed', () => {
  const caveGraph = new CaveGraph();

  expect(caveGraph.getWallNodeIndexesThatAreUnoccupied())
    .toEqual([4, 7, 8, 11, 14, 15, 18, 21, 22, 25, 28, 29, 33, 35]);
})

it('should return the correct node occupancy tile information via JSON', () => {
  const caveGraph = new CaveGraph();

  expect(caveGraph.getOccupancyJson())
    .toEqual({
      0: "WALL TILE",
      1: "WALL TILE",
      10: "ROCK TILE",
      11: "EMPTY TILE",
      12: "ROCK TILE",
      13: "WALL TILE",
      14: "EMPTY TILE",
      15: "EMPTY TILE",
      16: "WALL TILE",
      17: "EMPTY TILE",
      18: "EMPTY TILE",
      19: "ROCK TILE",
      2: "WALL TILE",
      20: "WALL TILE",
      21: "EMPTY TILE",
      22: "EMPTY TILE",
      23: "CAVE ENTRANCE THRESHOLD",
      24: "CAVE ENTRANCE",
      25: "EMPTY TILE",
      26: "ROCK TILE",
      27: "WALL TILE",
      28: "EMPTY TILE",
      29: "EMPTY TILE",
      3: "ROCK TILE",
      30: "WALL TILE",
      31: "WALL TILE",
      32: "ROCK TILE",
      33: "EMPTY TILE",
      34: "ROCK TILE",
      35: "EMPTY TILE",
      36: "ROCK TILE",
      37: "WALL TILE",
      38: "WALL TILE",
      39: "WALL TILE",
      4: "EMPTY TILE",
      40: "WALL TILE",
      5: "ROCK TILE",
      6: "WALL TILE",
      7: "EMPTY TILE",
      8: "EMPTY TILE",
      9: "WALL TILE",
    });
})

it('should be able to update occupancy with supplied occupancy JSON', () => {
  const caveGraph = new CaveGraph();
  const newOccupancyJson = {
    0: "EMPTY TILE",
    1: "EMPTY TILE",
    2: "EMPTY TILE",
    3: "ROCK TILE",
    4: "EMPTY TILE",
    5: "ROCK TILE",
    6: "EMPTY TILE",
    7: "EMPTY TILE",
    8: "EMPTY TILE",
    9: "EMPTY TILE",
    10: "ROCK TILE",
    11: "EMPTY TILE",
    12: "ROCK TILE",
    13: "EMPTY TILE",
    14: "EMPTY TILE",
    15: "EMPTY TILE",
    16: "EMPTY TILE",
    17: "EMPTY TILE",
    18: "EMPTY TILE",
    19: "ROCK TILE",
    20: "EMPTY TILE",
    21: "EMPTY TILE",
    22: "EMPTY TILE",
    23: "CAVE ENTRANCE THRESHOLD",
    24: "CAVE ENTRANCE",
    25: "EMPTY TILE",
    26: "ROCK TILE",
    27: "EMPTY TILE",
    28: "EMPTY TILE",
    29: "EMPTY TILE",
    30: "EMPTY TILE",
    31: "EMPTY TILE",
    32: "ROCK TILE",
    33: "EMPTY TILE",
    34: "ROCK TILE",
    35: "EMPTY TILE",
    36: "ROCK TILE",
    37: "EMPTY TILE",
    38: "EMPTY TILE",
    39: "EMPTY TILE",
    40: "EMPTY TILE",
  };

  caveGraph.setOccupancyJson(newOccupancyJson);

  expect(caveGraph.getOccupancyJson()).toEqual(newOccupancyJson);
})

function getNodeTypeCount (caveGraph, nodeType) {
  const nodeTypeTotal = [...caveGraph.caveNodes.keys()].reduce(
    (nodeTypeTotal, nodeIndex) => {
      const node = caveGraph.caveNodes.get(nodeIndex);
      return nodeTypeTotal + (node.getNodeType() == nodeType);
    },
    0
  );

  return nodeTypeTotal;
}



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
      0: CaveTiles.WALL_TILE,
      1: CaveTiles.WALL_TILE,
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
      2: CaveTiles.WALL_TILE,
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
      3: CaveTiles.ROCK_TILE,
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
      4: CaveTiles.EMPTY_TILE,
      40: CaveTiles.WALL_TILE,
      5: CaveTiles.ROCK_TILE,
      6: CaveTiles.WALL_TILE,
      7: CaveTiles.EMPTY_TILE,
      8: CaveTiles.EMPTY_TILE,
      9: CaveTiles.WALL_TILE,
    });
})

it('should be able to update occupancy with supplied occupancy JSON', () => {
  const caveGraph = new CaveGraph();
  const newOccupancyJson = {
    0: CaveTiles.EMPTY_TILE,
    1: CaveTiles.EMPTY_TILE,
    2: CaveTiles.EMPTY_TILE,
    3: CaveTiles.ROCK_TILE,
    4: CaveTiles.EMPTY_TILE,
    5: CaveTiles.ROCK_TILE,
    6: CaveTiles.EMPTY_TILE,
    7: CaveTiles.EMPTY_TILE,
    8: CaveTiles.EMPTY_TILE,
    9: CaveTiles.EMPTY_TILE,
    10: CaveTiles.ROCK_TILE,
    11: CaveTiles.EMPTY_TILE,
    12: CaveTiles.ROCK_TILE,
    13: CaveTiles.EMPTY_TILE,
    14: CaveTiles.EMPTY_TILE,
    15: CaveTiles.EMPTY_TILE,
    16: CaveTiles.EMPTY_TILE,
    17: CaveTiles.EMPTY_TILE,
    18: CaveTiles.EMPTY_TILE,
    19: CaveTiles.ROCK_TILE,
    20: CaveTiles.EMPTY_TILE,
    21: CaveTiles.EMPTY_TILE,
    22: CaveTiles.EMPTY_TILE,
    23: CaveTiles.CAVE_ENTRANCE_THRESHOLD,
    24: CaveTiles.CAVE_ENTRANCE_TILE,
    25: CaveTiles.EMPTY_TILE,
    26: CaveTiles.ROCK_TILE,
    27: CaveTiles.EMPTY_TILE,
    28: CaveTiles.EMPTY_TILE,
    29: CaveTiles.EMPTY_TILE,
    30: CaveTiles.EMPTY_TILE,
    31: CaveTiles.EMPTY_TILE,
    32: CaveTiles.ROCK_TILE,
    33: CaveTiles.EMPTY_TILE,
    34: CaveTiles.ROCK_TILE,
    35: CaveTiles.EMPTY_TILE,
    36: CaveTiles.ROCK_TILE,
    37: CaveTiles.EMPTY_TILE,
    38: CaveTiles.EMPTY_TILE,
    39: CaveTiles.EMPTY_TILE,
    40: CaveTiles.EMPTY_TILE,
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



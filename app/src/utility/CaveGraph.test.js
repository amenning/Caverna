import CaveGraph from './CaveGraph';

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

it('should have 9 rooms filled', () => {
  const caveGraph = new CaveGraph();
  const filledRoomCount = [...caveGraph.caveNodes.keys()].reduce(
    (nodeTypeTotal, nodeIndex) => {
      const node = caveGraph.caveNodes.get(nodeIndex);
      return nodeTypeTotal + (node.getNodeType() == node.ROOM && node.isNodeOccupied());
    },
    0
  );

  expect(filledRoomCount).toBe(9);
});

it('should have 15 walls present', () => {
  const caveGraph = new CaveGraph();
  const wallPresentCount = [...caveGraph.caveNodes.keys()].reduce(
    (nodeTypeTotal, nodeIndex) => {
      const node = caveGraph.caveNodes.get(nodeIndex);
      return nodeTypeTotal + (node.getNodeType() == node.WALL && node.isNodeOccupied());
    },
    0
  );

  expect(wallPresentCount).toBe(15);
});

it('should return the correct starting room indexes that can be excavated', () => {
  const caveGraph = new CaveGraph();

  expect(caveGraph.getRoomNodeIndexesThatCanBeExcavated()).toEqual([10, 19, 26, 32]);
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



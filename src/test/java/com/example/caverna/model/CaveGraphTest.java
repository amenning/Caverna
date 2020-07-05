package com.example.caverna.model;

import com.example.caverna.AbstractTestCase;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.HashMap;
import java.util.Map;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class CaveGraphTest extends AbstractTestCase {
    private final int EXPECTED_TOTAL_CAVE_NODES = 41;
    private final HashMap<Integer, CaveTileEnum> caveOccupancyMap = new HashMap<>();
    private CaveGraph caveGraph;

    @BeforeEach
    public void setUp() {
        caveOccupancyMap.put(0, CaveTileEnum.WALL);
        caveOccupancyMap.put(1, CaveTileEnum.WALL);
        caveOccupancyMap.put(2, CaveTileEnum.WALL);
        caveOccupancyMap.put(3, CaveTileEnum.ROCK);
        caveOccupancyMap.put(4, CaveTileEnum.EMPTY);
        caveOccupancyMap.put(5, CaveTileEnum.ROCK);
        caveOccupancyMap.put(6, CaveTileEnum.WALL);
        caveOccupancyMap.put(7, CaveTileEnum.EMPTY);
        caveOccupancyMap.put(8, CaveTileEnum.EMPTY);
        caveOccupancyMap.put(9, CaveTileEnum.WALL);
        caveOccupancyMap.put(10, CaveTileEnum.ROCK);
        caveOccupancyMap.put(11, CaveTileEnum.EMPTY);
        caveOccupancyMap.put(12, CaveTileEnum.ROCK);
        caveOccupancyMap.put(13, CaveTileEnum.WALL);
        caveOccupancyMap.put(14, CaveTileEnum.EMPTY);
        caveOccupancyMap.put(15, CaveTileEnum.EMPTY);
        caveOccupancyMap.put(16, CaveTileEnum.WALL);
        caveOccupancyMap.put(17, CaveTileEnum.EMPTY);
        caveOccupancyMap.put(18, CaveTileEnum.EMPTY);
        caveOccupancyMap.put(19, CaveTileEnum.ROCK);
        caveOccupancyMap.put(20, CaveTileEnum.WALL);
        caveOccupancyMap.put(21, CaveTileEnum.EMPTY);
        caveOccupancyMap.put(22, CaveTileEnum.EMPTY);
        caveOccupancyMap.put(23, CaveTileEnum.CAVE_ENTRANCE_THRESHOLD);
        caveOccupancyMap.put(24, CaveTileEnum.CAVE_ENTRANCE);
        caveOccupancyMap.put(25, CaveTileEnum.EMPTY);
        caveOccupancyMap.put(26, CaveTileEnum.ROCK);
        caveOccupancyMap.put(27, CaveTileEnum.WALL);
        caveOccupancyMap.put(28, CaveTileEnum.EMPTY);
        caveOccupancyMap.put(29, CaveTileEnum.EMPTY);
        caveOccupancyMap.put(30, CaveTileEnum.WALL);
        caveOccupancyMap.put(31, CaveTileEnum.WALL);
        caveOccupancyMap.put(32, CaveTileEnum.ROCK);
        caveOccupancyMap.put(33, CaveTileEnum.EMPTY);
        caveOccupancyMap.put(34, CaveTileEnum.ROCK);
        caveOccupancyMap.put(35, CaveTileEnum.EMPTY);
        caveOccupancyMap.put(36, CaveTileEnum.ROCK);
        caveOccupancyMap.put(37, CaveTileEnum.WALL);
        caveOccupancyMap.put(38, CaveTileEnum.WALL);
        caveOccupancyMap.put(39, CaveTileEnum.WALL);
        caveOccupancyMap.put(40, CaveTileEnum.WALL);

        caveGraph = new CaveGraph(caveOccupancyMap);
    }

    @AfterEach
    public void tearDown() {
        caveOccupancyMap.clear();
    }

    @Test
    public void testCaveGraphCreatesCaveGraphWithAllNodes() {
        assertNotNull(caveGraph);
        assertEquals(
            EXPECTED_TOTAL_CAVE_NODES,
            caveGraph.getCaveNodes().size(),
            String.format(
                "Expected new cave graph to have %d nodes but found %d",
                EXPECTED_TOTAL_CAVE_NODES,
                caveGraph.getCaveNodes().size()
            )
        );
    }

    @Test
    public void testCaveGraphComposition() {
        Map<String, Integer> nodeTypeCountMap = getNodeTypeCountMap();

        int expectedRoomNodeCount = 11;
        assertNodeCountForType(
            expectedRoomNodeCount,
            nodeTypeCountMap.get(CaveRoomNode.class.getSimpleName()),
            CaveRoomNode.class.getSimpleName()
        );

        int expectedWallNodeCount = 30;
        assertNodeCountForType(
            expectedWallNodeCount,
            nodeTypeCountMap.get(CaveWallNode.class.getSimpleName()),
            CaveWallNode.class.getSimpleName()
        );
    }

    private Map<String, Integer> getNodeTypeCountMap() {
        Map<String, Integer> nodeTypeCountMap = new HashMap<>();
        String caveWallNodeKey = CaveWallNode.class.getSimpleName();
        String caveRoomNodeKey = CaveRoomNode.class.getSimpleName();

        nodeTypeCountMap.put(caveWallNodeKey, 0);
        nodeTypeCountMap.put(caveRoomNodeKey, 0);

        Map<Integer, CaveNode> caveNodes = caveGraph.getCaveNodes();
        int nodeCount;
        for (Map.Entry<Integer, CaveNode> caveNodeEntry : caveNodes.entrySet()) {
            if (caveNodeEntry.getValue() instanceof CaveWallNode) {
                nodeCount = nodeTypeCountMap.get(caveWallNodeKey) + 1;
                nodeTypeCountMap.put(caveWallNodeKey, nodeCount);
            } else {
                nodeCount = nodeTypeCountMap.get(caveRoomNodeKey) + 1;
                nodeTypeCountMap.put(caveRoomNodeKey, nodeCount);
            }
        }

        return nodeTypeCountMap;
    }

    private void assertNodeCountForType(
        int expectedNodeCount,
        int actualNodeCount,
        String nodeType
    ) {
        assertEquals(
            expectedNodeCount,
            actualNodeCount,
            String.format(
                "Expected to find %d %s nodes but instead found %d",
                expectedNodeCount,
                nodeType,
                actualNodeCount
            )
        );
    }

    @Test
    public void testCaveNodeTileTypes() {
        Map<Integer, CaveNode> caveNodes = caveGraph.getCaveNodes();

        int occupiedCaveRoomCount = 0;
        int occupiedCaveWallCount = 0;
        for (Map.Entry<Integer, CaveNode> caveNodeEntry : caveNodes.entrySet()) {
            CaveNode caveNode = caveNodeEntry.getValue();
            if (caveNode instanceof CaveRoomNode && caveNode.isNodeOccupied()) {
                ++occupiedCaveRoomCount;
            } else if (caveNode instanceof CaveWallNode
                && caveNode.isNodeOccupied()
                && caveNode.getCaveTile() == CaveTileEnum.WALL
            ) {
                ++occupiedCaveWallCount;
            }
        }

        assertNodeCountForType(
            10,
            occupiedCaveRoomCount,
            "occupied " + CaveRoomNode.class.getSimpleName()
        );
        assertNodeCountForType(
            15,
            occupiedCaveWallCount,
            "occupied " + CaveWallNode.class.getSimpleName()
        );
    }
}

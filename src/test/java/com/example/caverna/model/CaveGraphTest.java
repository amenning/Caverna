package com.example.caverna.model;

import com.example.caverna.AbstractTestCase;
import org.junit.jupiter.api.AfterEach;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import java.util.HashMap;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

public class CaveGraphTest extends AbstractTestCase {
    private final int EXPECTED_TOTAL_CAVE_NODES = 41;
    private final HashMap<Integer, CaveTileEnum> caveOccupancyMap = new HashMap<>();

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
    }

    @AfterEach
    public void tearDown() {
        caveOccupancyMap.clear();
    }

    @Test
    public void testCaveGraphCreatesCaveGraphWithAllNodes() {
        CaveGraph caveGraph = new CaveGraph(caveOccupancyMap);

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
}

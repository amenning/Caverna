package com.example.caverna.model;

import com.example.caverna.AbstractTestCase;
import org.junit.jupiter.api.Test;

import java.util.ArrayList;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertTrue;

class CaveNodeTest extends AbstractTestCase {
    private final Integer MAIN_CAVE_NODE_INDEX = 42;

    @Test
    public void testGetCaveNodeIndex() {
        CaveNode caveNode = new CaveNode(MAIN_CAVE_NODE_INDEX);

        assertEquals(MAIN_CAVE_NODE_INDEX, caveNode.getCaveNodeIndex());
    }

    @Test
    public void testAddAdjacentNode() {
        ArrayList<CaveNode> adjacentNodes;
        CaveNode caveNode = new CaveNode(MAIN_CAVE_NODE_INDEX);

        adjacentNodes = caveNode.getAdjacentNodes();
        assertEquals(0, adjacentNodes.size());

        CaveNode secondCaveNode = new CaveNode(MAIN_CAVE_NODE_INDEX + 1);
        caveNode.addAdjacentNode(secondCaveNode);
        assertEquals(1, adjacentNodes.size());

        CaveNode thirdCaveNode = new CaveNode(MAIN_CAVE_NODE_INDEX + 2);
        caveNode.addAdjacentNode(thirdCaveNode);
        assertEquals(2, adjacentNodes.size());
    }


    @Test
    public void testIsNodeOccupied() {
        CaveNode caveNode = new CaveNode(MAIN_CAVE_NODE_INDEX);

        assertFalse(caveNode.isNodeOccupied());
        assertEquals(CaveTileEnum.EMPTY, caveNode.getCaveTile());

        caveNode.markOccupiedWith(CaveTileEnum.ROCK);
        assertTrue(caveNode.isNodeOccupied());
        assertEquals(CaveTileEnum.ROCK, caveNode.getCaveTile());
    }
}

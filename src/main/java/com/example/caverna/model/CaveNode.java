package com.example.caverna.model;

import java.util.ArrayList;

public class CaveNode {
    private final Integer nodeIndex;
    private final ArrayList<CaveNode> adjacentNodes;
    private CaveTileEnum caveTile;

    public CaveNode(int nodeIndex) {
        this.nodeIndex = nodeIndex;

        adjacentNodes = new ArrayList<>();
        caveTile = CaveTileEnum.EMPTY;
    }

    public Integer getCaveNodeIndex() {
        return nodeIndex;
    }

    public void addAdjacentNode(CaveNode caveNode) {
        adjacentNodes.add(caveNode);
    }

    public ArrayList<CaveNode> getAdjacentNodes() {
        return adjacentNodes;
    }

    public Boolean isNodeOccupied() {
        return caveTile != CaveTileEnum.EMPTY;
    }

    public void markOccupiedWith(CaveTileEnum caveTile) {
        this.caveTile = caveTile;
    }

    public CaveTileEnum getCaveTile() {
        return caveTile;
    }
}

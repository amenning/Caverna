package com.example.caverna.model;

import java.util.HashMap;

public class CaveGraph {
    private HashMap<Integer, CaveTileEnum> caveOccupancyMap;

    public CaveGraph(HashMap<Integer, CaveTileEnum> caveOccupancyMap) {
        this.caveOccupancyMap = caveOccupancyMap;
    }
    public HashMap<Integer, CaveTileEnum> getCaveNodes() {
        return caveOccupancyMap;
    }
}

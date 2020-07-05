package com.example.caverna.model;

import java.util.HashMap;
import java.util.Map;

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
public class CaveGraph {
    private HashMap<Integer, CaveTileEnum> caveOccupancyMap;
    private Map<Integer, CaveNode> caveNodes;
    private Map<Integer, Integer[]> caveRoomWallIndexMap;

    private Integer[] caveWallNodeIndexes = {
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
    };

    private Integer[] caveRoomNodeIndexes = {
        3, 5,
        10, 12,
        17, 19,
        24, 26,
        32, 34, 36
    };

    public CaveGraph(HashMap<Integer, CaveTileEnum> caveOccupancyMap) {
        this.caveOccupancyMap = caveOccupancyMap;

        caveNodes = new HashMap<>();
        createCaveNodes();

        associatedRoomNodesWithWallNodes();

        populateCaveNodesWithTiles();
    }

    public Map<Integer, CaveNode> getCaveNodes() {
        return caveNodes;
    }

    private void createCaveNodes() {
        for (int caveWallNodeIndex : caveWallNodeIndexes) {
            createCaveWallNodeForNodeIndex(caveWallNodeIndex);
        }

        for (int caveRoomNodeIndex : caveRoomNodeIndexes) {
            createCaveRoomNodeForNodeIndex(caveRoomNodeIndex);
        }
    }

    private void createCaveWallNodeForNodeIndex(int caveWallNodeIndex) {
        CaveNode wallNode = new CaveWallNode(caveWallNodeIndex);
        caveNodes.put(caveWallNodeIndex, wallNode);
    }

    private void createCaveRoomNodeForNodeIndex(int caveRoomNodeIndex) {
        CaveNode roomNode = new CaveRoomNode(caveRoomNodeIndex);
        caveNodes.put(caveRoomNodeIndex, roomNode);
    }

    private void associatedRoomNodesWithWallNodes() {
        caveRoomWallIndexMap = new HashMap<>();
        caveRoomWallIndexMap.put(3, new Integer[] {0, 2, 4, 7});
        caveRoomWallIndexMap.put(5, new Integer[] {1, 4, 6, 8});
        caveRoomWallIndexMap.put(10, new Integer[] {7, 9, 11, 14});
        caveRoomWallIndexMap.put(12, new Integer[] {8, 11, 13, 15});
        caveRoomWallIndexMap.put(17, new Integer[] {14, 16, 18, 21});
        caveRoomWallIndexMap.put(19, new Integer[] {15, 18, 20, 22});
        caveRoomWallIndexMap.put(24, new Integer[] {21, 23, 25, 28});
        caveRoomWallIndexMap.put(26, new Integer[] {22, 25, 27, 29});
        caveRoomWallIndexMap.put(32, new Integer[] {28, 31, 33, 38});
        caveRoomWallIndexMap.put(34, new Integer[] {29, 33, 35, 39});
        caveRoomWallIndexMap.put(36, new Integer[] {30, 35, 37, 40});

        for (int caveRoomIndex : caveRoomWallIndexMap.keySet()) {
            Integer[] caveWallIndexes = caveRoomWallIndexMap.get(caveRoomIndex);
            this.associatedRoomNodeIndexWithWallNodeIndexes(
                caveRoomIndex,
                caveWallIndexes
            );
        }
    }

    private void associatedRoomNodeIndexWithWallNodeIndexes(
        int caveRoomIndex,
        Integer[] caveWallIndexes
    ) {
        CaveNode roomNode = caveNodes.get(caveRoomIndex);
        for (int caveWallIndex : caveWallIndexes) {
            CaveNode wallNode = caveNodes.get(caveWallIndex);
            wallNode.addAdjacentNode(roomNode);
            roomNode.addAdjacentNode(wallNode);
        }
    }

    private void populateCaveNodesWithTiles() {
        for (Map.Entry<Integer, CaveTileEnum> caveOccupancyEntry : caveOccupancyMap.entrySet()) {
            caveNodes.get(caveOccupancyEntry.getKey())
                .markOccupiedWith(caveOccupancyEntry.getValue());
        }
    }
}

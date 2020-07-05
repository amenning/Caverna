package com.example.caverna.model;

public enum CaveTileEnum {
    EMPTY ("EMPTY"),
    WALL ("WALL"),
    ROCK ("ROCK"),
    CAVE_ENTRANCE ("CAVE ENTRANCE"),
    CAVE_ENTRANCE_THRESHOLD ("CAVE ENTRANCE THRESHOLD");

    private final String enumString;

    CaveTileEnum(String enumString) {
        this.enumString = enumString;
    }

    public String toString() {
        return this.enumString;
    }
}

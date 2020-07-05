package com.example.caverna.model;

import com.example.caverna.AbstractTestCase;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class CaveTileEnumTest extends AbstractTestCase {
    @Test
    public void testEnumStringValues() {
        assertEquals("EMPTY", CaveTileEnum.EMPTY.toString());
        assertEquals("WALL", CaveTileEnum.WALL.toString());
        assertEquals("ROCK", CaveTileEnum.ROCK.toString());
        assertEquals("CAVE ENTRANCE", CaveTileEnum.CAVE_ENTRANCE.toString());
        assertEquals("CAVE ENTRANCE THRESHOLD", CaveTileEnum.CAVE_ENTRANCE_THRESHOLD.toString());
    }
}

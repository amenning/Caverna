package com.example.caverna.entity;

import com.example.caverna.AbstractDatabaseTestCase;
import org.junit.jupiter.api.Test;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.SqlGroup;

import static org.junit.jupiter.api.Assertions.*;

@SqlGroup({
    @Sql(executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD, scripts = "/data/schema-test.sql"),
    @Sql(executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD, scripts = "/data/data-test.sql"),
    @Sql(executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD, scripts = "/data/entity/afterRoomTileTest.sql")
})
class RoomTileTest extends AbstractDatabaseTestCase {
    private static final String MAIN_TEST_ROOM_NAME = "TEST ROOM NAME";

    @Test
    void getRoomTileId() {
        RoomTile roomTile = new RoomTile(MAIN_TEST_ROOM_NAME);

        entityManager.persist(roomTile);
        entityManager.flush();

        assertNotNull(roomTile.getRoomTileId());
    }

    @Test
    void getRoomTileName() {
        RoomTile roomTile = new RoomTile(MAIN_TEST_ROOM_NAME);

        assertEquals(
            MAIN_TEST_ROOM_NAME,
            roomTile.getRoomTileName(),
            String.format(
                "Expected actual room name '%s' to match given room name '%s'",
                roomTile.getRoomTileName(),
                MAIN_TEST_ROOM_NAME
            )
        );
    }

    @Test
    void testToString() {
        RoomTile roomTile = new RoomTile(MAIN_TEST_ROOM_NAME);

        entityManager.persist(roomTile);
        entityManager.flush();
        System.out.println(roomTile.toString());

        assertTrue(
            roomTile.toString()
                .matches(
                    "RoomTile\\[room_tile_id=\\d*, room_tile_name='.*']"
                )
        );
    }
}

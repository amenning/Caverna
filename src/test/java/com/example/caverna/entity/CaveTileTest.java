package com.example.caverna.entity;

import com.example.caverna.AbstractDatabaseTestCase;
import org.junit.jupiter.api.Test;
import org.springframework.test.context.jdbc.SqlGroup;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;


@SqlGroup({
    //@Sql(executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD, scripts = "/data/schema-test.sql"),
    //@Sql(executionPhase = Sql.ExecutionPhase.BEFORE_TEST_METHOD, scripts = "/data/data-test.sql"),
    //@Sql(executionPhase = Sql.ExecutionPhase.AFTER_TEST_METHOD, scripts = "/data/entity/afterCaveTileTest.sql")
})
class CaveTileTest extends AbstractDatabaseTestCase {
    private static final String MAIN_TEST_CAVE_NAME = "TEST CAVE TILE NAME";

    @Test
    public void getCaveTileId() {
        CaveTile caveTile = new CaveTile(MAIN_TEST_CAVE_NAME);

        entityManager.persist(caveTile);
        entityManager.flush();

        assertNotNull(caveTile.getCaveTileId());
    }

    @Test
    public void getCaveTileName() {
        CaveTile caveTile = new CaveTile(MAIN_TEST_CAVE_NAME);

        assertEquals(
            MAIN_TEST_CAVE_NAME,
            caveTile.getCaveTileName(),
            String.format(
                "Expected actual cave name '%s' to match given cave name '%s'",
                caveTile.getCaveTileName(),
                MAIN_TEST_CAVE_NAME
            )
        );
    }

    @Test
    public void testToString() {
        CaveTile caveTile = new CaveTile(MAIN_TEST_CAVE_NAME);

        entityManager.persist(caveTile);
        entityManager.flush();
        System.out.println(caveTile.toString());

        assertTrue(
            caveTile.toString()
                .matches(
                    "CaveTile\\[cave_tile_id=\\d*, cave_tile_name='.*']"
                )
        );
    }
}

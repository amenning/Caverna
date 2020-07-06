INSERT INTO player (first_name)
SELECT *
FROM (
    SELECT 'Andrew' AS first_name
) x
WHERE NOT EXISTS (
    SELECT *
    FROM player
);
COMMIT;

INSERT INTO game (player_id)
SELECT *
FROM (
    SELECT player_id
    FROM player
    WHERE first_name = 'Andrew'
) x
WHERE NOT EXISTS (
    SELECT *
    FROM game
);
COMMIT;

INSERT INTO cave_tile (cave_tile_name)
SELECT *
FROM (
    SELECT 'EMPTY' AS cave_tile_name UNION
    SELECT 'ROCK' AS cave_tile_name UNION
    SELECT 'WALL' AS cave_tile_name UNION
    SELECT 'CAVE ENTRANCE' AS cave_tile_name UNION
    SELECT 'CAVE ENTRANCE THRESHOLD' AS cave_tile_name
) x
WHERE NOT EXISTS (
    SELECT *
    FROM cave_tile
);
COMMIT;

INSERT INTO cave (game_id, player_id)
SELECT *
FROM (
    SELECT g.game_id
        ,p.player_id
    FROM game g
        LEFT JOIN player p ON g.player_id = p.player_id
    WHERE p.first_name = 'Andrew'
) x
WHERE NOT EXISTS (
    SELECT *
    FROM cave
);
COMMIT;

INSERT INTO cave_location (cave_id, cave_location_id, cave_tile_id)
SELECT *
FROM (
    WITH game_details AS (
        SELECT g.game_id
            ,p.player_id
            ,c.cave_id
        FROM game g
            LEFT JOIN player p ON g.player_id = p.player_id
            LEFT JOIN cave c
                ON g.game_id = c.game_id
                    AND p.player_id = c.player_id
        WHERE p.first_name = 'Andrew'
    )
    SELECT gd.cave_id, 0, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'WALL')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 1, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'WALL')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 2, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'WALL')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 3, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'ROCK')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 4, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'EMPTY')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 5, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'ROCK')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 6, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'WALL')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 7, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'EMPTY')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 8, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'EMPTY')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 9, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'WALL')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 10, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'ROCK')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 11, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'EMPTY')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 12, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'ROCK')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 13, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'WALL')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 14, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'EMPTY')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 15, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'EMPTY')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 16, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'WALL')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 17, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'EMPTY')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 18, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'EMPTY')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 19, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'ROCK')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 20, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'WALL')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 21, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'EMPTY')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 22, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'EMPTY')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 23, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'CAVE ENTRANCE THRESHOLD')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 24, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'CAVE ENTRANCE')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 25, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'EMPTY')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 26, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'ROCK')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 27, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'WALL')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 28, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'EMPTY')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 29, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'EMPTY')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 30, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'WALL')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 31, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'WALL')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 32, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'ROCK')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 33, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'EMPTY')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 34, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'ROCK')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 35, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'EMPTY')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 36, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'ROCK')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 37, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'WALL')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 38, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'WALL')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 39, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'WALL')
    FROM game_details gd
    UNION
    SELECT gd.cave_id, 40, (SELECT cave_tile_id FROM cave_tile WHERE cave_tile_name = 'WALL')
    FROM game_details gd
) x
WHERE NOT EXISTS (
    SELECT *
    FROM cave_location
);
COMMIT;

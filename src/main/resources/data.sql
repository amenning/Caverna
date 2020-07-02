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

INSERT INTO room_tile (room_tile_name)
SELECT *
FROM (
    SELECT 'EMPTY' AS room_tile_name UNION
    SELECT 'ROCK' AS room_tile_name UNION
    SELECT 'WALL' AS room_tile_name UNION
    SELECT 'CAVE ENTRANCE' AS room_tile_name UNION
    SELECT 'CAVE ENTRANCE THRESHOLD' AS room_tile_name
) x
WHERE NOT EXISTS (
    SELECT *
    FROM room_tile
);
COMMIT;

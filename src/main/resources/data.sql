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

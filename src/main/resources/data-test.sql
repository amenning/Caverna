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

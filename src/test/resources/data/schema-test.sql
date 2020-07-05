CREATE TABLE IF NOT EXISTS player (
     player_id SERIAL PRIMARY KEY NOT NULL
    ,first_name CHAR(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS game (
     game_id SERIAL PRIMARY KEY NOT NULL
    ,player_id INT NOT NULL REFERENCES player(player_id)
);

CREATE TABLE IF NOT EXISTS cave_tile (
     cave_tile_id SERIAL PRIMARY KEY NOT NULL
    ,cave_tile_name CHAR(200) NOT NULL
);

CREATE TABLE IF NOT EXISTS cave (
     cave_id SERIAL PRIMARY KEY NOT NULL
    ,game_id INT NOT NULL REFERENCES game(game_id)
    ,player_id INT NOT NULL REFERENCES player(player_id)
);

CREATE TABLE IF NOT EXISTS cave_location (
     cave_id INT NOT NULL REFERENCES cave(cave_id)
    ,cave_location_id INT NOT NULL
    ,cave_tile_id INT NOT NULL REFERENCES cave_tile(cave_tile_id)
);

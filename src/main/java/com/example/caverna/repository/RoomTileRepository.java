package com.example.caverna.repository;

import com.example.caverna.entity.RoomTile;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RoomTileRepository extends CrudRepository<RoomTile, Long> {
    List<RoomTile> findByRoomTileName(String roomTileName);

    RoomTile findByRoomTileId(Long roomTileId);
}

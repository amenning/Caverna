package com.example.caverna.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.GenerationType;

@Entity
public class RoomTile {
    @Id
    @SequenceGenerator(
        name="room_tile_room_tile_id_seq",
        sequenceName="room_tile_room_tile_id_seq",
        allocationSize=1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator="room_tile_room_tile_id_seq"
    )
    private Long roomTileId;
    private String roomTileName;

    protected RoomTile() {}

    public RoomTile(String roomTileName) {
        this.roomTileName = roomTileName;
    }

    public Long getRoomTileId() {
        return roomTileId;
    }

    public String getRoomTileName() {
        return roomTileName;
    }

    @Override
    public String toString() {
        return String.format(
            "RoomTile[room_tile_id=%d, room_tile_name='%s']",
            roomTileId,
            roomTileName
        );
    }
}

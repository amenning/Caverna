package com.example.caverna.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;
import javax.persistence.GenerationType;

@Entity
public class CaveTile {
    @Id
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator="cave_tile_id_generator"
    )
    @SequenceGenerator(
        name="cave_tile_id_generator",
        sequenceName="cave_tile_cave_tile_id_seq",
        allocationSize=1
    )
    private Long caveTileId;
    private String caveTileName;

    protected CaveTile() {}

    public CaveTile(String caveTileName) {
        this.caveTileName = caveTileName;
    }

    public Long getCaveTileId() {
        return caveTileId;
    }

    public String getCaveTileName() {
        return caveTileName;
    }

    @Override
    public String toString() {
        return String.format(
            "CaveTile[cave_tile_id=%d, cave_tile_name='%s']",
            caveTileId,
            caveTileName
        );
    }
}

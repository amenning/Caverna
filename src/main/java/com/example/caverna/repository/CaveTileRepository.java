package com.example.caverna.repository;

import com.example.caverna.entity.CaveTile;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CaveTileRepository extends CrudRepository<CaveTile, Long> {
    List<CaveTile> findByCaveTileName(String caveTileName);

    CaveTile findByCaveTileId(Long caveTileId);
}

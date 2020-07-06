package com.example.caverna.repository;

import com.example.caverna.entity.Game;
import org.springframework.data.repository.CrudRepository;

public interface GameRepository extends CrudRepository<Game, Long> {

}

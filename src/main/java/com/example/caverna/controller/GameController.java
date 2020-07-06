package com.example.caverna.controller;

import com.example.caverna.entity.Game;
import com.example.caverna.entity.Player;
import com.example.caverna.repository.GameRepository;
import com.example.caverna.repository.PlayerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class GameController {
    @Autowired
    private PlayerRepository playerRepo;

    @Autowired
    private GameRepository gameRepo;

    @PostMapping(value = "/createGame")
    public Game newGame() {
        Player player = new Player("Test Player");
        playerRepo.save(player);

        Game game = new Game(player.getPlayerId());
        gameRepo.save(game);

        return game;
    }
}

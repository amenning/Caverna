package com.example.caverna.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class Game {
    @Id
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator="game_id_generator"
    )
    @SequenceGenerator(
        name="game_id_generator",
        sequenceName="game_game_id_seq",
        allocationSize=1
    )
    private Long gameId;
    private Long playerId;

    public Game(Long playerId) {
        this.playerId = playerId;
    }

    public Long getPlayerId() {
        return playerId;
    }

    public Long getGameId() {
        return gameId;
    }

    @Override
    public String toString() {
        return String.format(
            "Game[game_id=%d, playerId='%d']",
            gameId,
            playerId
        );
    }
}

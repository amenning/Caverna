package com.example.caverna.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class Player {
    @Id
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator="player_id_generator"
    )
    @SequenceGenerator(
        name="player_id_generator",
        sequenceName="player_player_id_seq",
        allocationSize=1
    )
    private Long playerId;
    private String firstName;

    public Player(String firstName) {
        this.firstName = firstName;
    }

    public Long getPlayerId() {
        return playerId;
    }

    public String getFirstName() {
        return firstName;
    }

    @Override
    public String toString() {
        return String.format(
            "Player[player_id=%d, first_name='%s']",
            playerId,
            firstName
        );
    }
}

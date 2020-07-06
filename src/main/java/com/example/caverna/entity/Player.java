package com.example.caverna.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.SequenceGenerator;

@Entity
public class Player {
    @Id
    @SequenceGenerator(
        name="player_id_seq",
        sequenceName="player_id_seq",
        allocationSize=1
    )
    @GeneratedValue(
        strategy = GenerationType.SEQUENCE,
        generator="player_id_seq"
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

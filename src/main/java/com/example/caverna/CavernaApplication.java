package com.example.caverna;

import com.example.caverna.entity.RoomTile;
import com.example.caverna.repository.RoomTileRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

@SpringBootApplication
public class CavernaApplication {
    private static final Logger log = LoggerFactory.getLogger(CavernaApplication.class);

    public static void main(String[] args) {
        SpringApplication.run(CavernaApplication.class, args);
    }

    @Bean
    public CommandLineRunner demo(RoomTileRepository repository) {
        return (args) -> {
            repository.save(new RoomTile("Test Room"));

            // fetch all room tiles
            log.info("Room Tiles found with findAll():");
            log.info("-------------------------------");
            for (RoomTile roomTile : repository.findAll()) {
                log.info(roomTile.toString());
            }
        };
    }
}

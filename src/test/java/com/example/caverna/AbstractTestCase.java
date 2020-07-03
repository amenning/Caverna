package com.example.caverna;

import org.junit.After;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;

import javax.annotation.PostConstruct;

@ActiveProfiles("test")
@SpringBootTest
public abstract class AbstractTestCase {
    @PostConstruct
    public abstract void onSetUp();

    @After
    public abstract void onTearDown();
}

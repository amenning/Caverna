package com.example.caverna;

import org.junit.After;
import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringRunner;

import javax.annotation.PostConstruct;

@ActiveProfiles("test")
@RunWith(SpringRunner.class)
@SpringBootTest
public abstract class AbstractTestCase {
    @PostConstruct
    public abstract void onSetUp();

    @After
    public abstract void onTearDown();
}

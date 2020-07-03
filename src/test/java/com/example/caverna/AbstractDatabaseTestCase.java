package com.example.caverna;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.test.context.jdbc.Sql;
import org.springframework.test.context.jdbc.SqlGroup;

import javax.persistence.EntityManager;
import javax.sql.DataSource;
import javax.transaction.Transactional;

@Transactional
public abstract class AbstractDatabaseTestCase extends AbstractTestCase {
    @Autowired
    protected DataSource dataSource;

    @Autowired
    protected EntityManager entityManager;

    protected JdbcTemplate jdbcTemplate;
    protected NamedParameterJdbcTemplate namedParameterJdbcTemplate;


    @Override
    public void onSetUp() {
        this.jdbcTemplate = new JdbcTemplate(dataSource);
        this.namedParameterJdbcTemplate = new NamedParameterJdbcTemplate(dataSource);
    }

    @Override
    public void onTearDown() {

    }
}

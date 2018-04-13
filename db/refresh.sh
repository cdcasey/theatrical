knex migrate:rollback
knex migrate:rollback --env test

knex migrate:latest
knex migrate:latest --env test

knex seed:run
knex seed:run --env test

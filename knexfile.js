// Update with your config settings.

module.exports = {

  test: {
    client: 'postgresql',
    connection: {
      database: 'theatrical-test'
    }
  },

  development: {
    client: 'postgresql',
    connection: {
      database: 'theatrical-dev'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'tfgglmllmlcuij:5c1c8b9a6dad07b100707a1ee7e932d91801f2cef16be0cab09e29ae5f5da71a@ec2-54-235-146-184.compute-1.amazonaws.com:5432/d74ijojkjnold'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};

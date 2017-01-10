// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './filmdata.sqlite3'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'grvexkdqsnsxfp',
      password: 'bx7_kLgCpte-i28gKNNALKhm7M'
    },
    pool: {
      min: 2,
      max: 100
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: process.env.DATABASE_URL

};

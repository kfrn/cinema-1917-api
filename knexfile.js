module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './filmdata.sqlite3'
    },
    useNullAsDefault: true
  },

  production: process.env.DATABASE_URL

}

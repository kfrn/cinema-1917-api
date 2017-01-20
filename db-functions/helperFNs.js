var Knex = require('knex')
var config = require('../knexfile')[ process.env.NODE_ENV || 'development' ]
var knex = Knex(config)

module.exports = {
  getCountries,
  getGenres
}

function getCountries() {
  return knex('films')
          .distinct('countries')
}

function getGenres() {
  return knex('films')
          .distinct('genres')
}

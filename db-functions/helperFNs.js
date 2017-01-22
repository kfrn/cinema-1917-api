const Knex = require('knex')
const config = require('../knexfile')[ process.env.NODE_ENV || 'development' ]
const knex = Knex(config)

module.exports = {
  getCountries,
  getGenres
}

function getCountries () {
  return knex('films')
          .distinct('countries')
}

function getGenres () {
  return knex('films')
          .distinct('genres')
}

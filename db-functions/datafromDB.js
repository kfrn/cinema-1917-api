var Knex = require('knex')
var config = require('../knexfile')[ process.env.NODE_ENV || 'development' ]
var knex = Knex(config)

module.exports = {
  getAllFilms,
  getFilmsByTitle
}

function getAllFilms() {
  return knex('films')
}

function getFilmsByTitle(searchTerm) {
  return knex.raw('SELECT * FROM films WHERE title LIKE \'%' + searchTerm + '%\'')
}

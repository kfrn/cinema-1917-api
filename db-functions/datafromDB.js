var Knex = require('knex')
var config = require('../knexfile')[ process.env.NODE_ENV || 'development' ]
var knex = Knex(config)

module.exports = {
  getAllFilms,
  getFilmsByTitle,
  getFilmsByDirector,
  getFilmsByWriter,
  getFilmsByActor
}

function getAllFilms() {
  return knex('films')
}

function getFilmsByTitle(searchTerm) {
  return knex.raw('SELECT * FROM films WHERE title LIKE \'%' + searchTerm + '%\'')
}

function getFilmsByDirector(searchTerm) {
  return knex.raw('SELECT * FROM films WHERE director LIKE \'%' + searchTerm + '%\'')
}

function getFilmsByWriter(searchTerm) {
  return knex.raw('SELECT * FROM films WHERE writers LIKE \'%' + searchTerm + '%\'')
}

function getFilmsByActor(searchTerm) {
  return knex.raw('SELECT * FROM films WHERE actors LIKE \'%' + searchTerm + '%\'')
}

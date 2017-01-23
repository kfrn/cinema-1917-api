const Knex = require('knex')
const config = require('../knexfile')[ process.env.NODE_ENV || 'development' ]
const knex = Knex(config)

module.exports = {
  getAllFilms,
  getFilmsByTitle,
  getFilmsByDirector,
  getFilmsByWriter,
  getFilmsByActor,
  getFilmsByGenre,
  getFilmsByCountry,
  getFilmsByPlotKeyword,
  getFilmsWithPoster,
  hasRunTime,
  getFilmsByReleaseMonth,
  hasReleaseDate
}

function getAllFilms () {
  return knex('films')
}

// SELECT * FROM films WHERE title LIKE lower('%green%')
function getFilmsByTitle (searchTerm) {
  return knex.raw(`SELECT * FROM films WHERE title LIKE lower('%${searchTerm}%')`)
}

function getFilmsByDirector (searchTerm) {
  return knex.raw(`SELECT * FROM films WHERE director LIKE lower('%${searchTerm}%')`)
}

function getFilmsByWriter (searchTerm) {
  return knex.raw('SELECT * FROM films WHERE writers LIKE lower(\'%' + searchTerm + '%\')')
}

function getFilmsByActor (searchTerm) {
  return knex.raw('SELECT * FROM films WHERE actors LIKE lower(\'%' + searchTerm + '%\')')
}

function getFilmsByGenre (searchTerm) {
  return knex.raw('SELECT * FROM films WHERE genres LIKE lower(\'%' + searchTerm + '%\')')
}

function getFilmsByCountry (searchTerm) {
  return knex.raw('SELECT * FROM films WHERE countries LIKE lower(\'%' + searchTerm + '%\')')
}

function getFilmsByPlotKeyword (searchTerm) {
  return knex.raw('SELECT * FROM films WHERE plot LIKE lower(\'%' + searchTerm + '%\')')
}

function getFilmsWithPoster (searchTerm) {
  if (searchTerm === 'yes') {
    return knex('films').where('posterURL', '<>', '""')
  } else return knex.raw('SELECT * FROM films WHERE posterURL IS NULL')
}

function hasRunTime (searchTerm) {
  if (searchTerm === 'yes') return knex('films').where('runtime', '<>', 'unknown')
  else return knex.raw('SELECT * FROM films WHERE runtime = "unknown"')
}

function getFilmsByReleaseMonth (searchTerm) {
  return knex('films').where('released', 'like', '%' + searchTerm + '%')
}

function hasReleaseDate (searchTerm) {
  if (searchTerm === 'yes') return knex('films').where('released', '<>', 'unknown')
  else return knex('films').where('released', 'unknown')
}

// `SELECT * FROM films WHERE runtime <> "unknown" AND runtime BETWEEN + ${lowerLimit} AND ${upperLimit}`

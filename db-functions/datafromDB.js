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

// Note that ILIKE is PostgreSQL-specific and will throw an error in SQLite.

function getFilmsByTitle (searchTerm) {
  return knex('films').where('title', 'ILIKE', '%' + searchTerm + '%')
}

function getFilmsByDirector (searchTerm) {
  return knex('films').where('director', 'ILIKE', '%' + searchTerm + '%')
}

function getFilmsByWriter (searchTerm) {
  return knex('films').where('writers', 'ILIKE', '%' + searchTerm + '%')
}

function getFilmsByActor (searchTerm) {
  return knex('films').where('actors', 'ILIKE', '%' + searchTerm + '%')
}

function getFilmsByGenre (searchTerm) {
  return knex('films').where('genres', 'ILIKE', '%' + searchTerm + '%')
}

function getFilmsByCountry (searchTerm) {
  return knex('films').where('countries', 'ILIKE', '%' + searchTerm + '%')
}

function getFilmsByPlotKeyword (searchTerm) {
  return knex('films').where('plot', 'ILIKE', '%' + searchTerm + '%')
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
  return knex('films').where('released', 'ILIKE', '%' + searchTerm + '%')
}

function hasReleaseDate (searchTerm) {
  if (searchTerm === 'yes') return knex('films').where('released', '<>', 'unknown')
  else return knex('films').where('released', 'unknown')
}

// `SELECT * FROM films WHERE runtime <> "unknown" AND runtime BETWEEN + ${lowerLimit} AND ${upperLimit}`

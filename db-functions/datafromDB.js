var Knex = require('knex')
var config = require('../knexfile')[ process.env.NODE_ENV || 'development' ]
var knex = Knex(config)

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
  getFilmsByReleaseMonth
}

function getAllFilms() {
  return knex('films')
}

function getFilmsByTitle(searchTerm) {
  return knex('films').where('title', 'like', '%' + searchTerm + '%')
}

function getFilmsByDirector(searchTerm) {
  return knex('films').where('director', 'like', '%' + searchTerm + '%')
}

function getFilmsByWriter(searchTerm) {
  return knex('films').where('writers', 'like', '%' + searchTerm + '%')
}

function getFilmsByActor(searchTerm) {
  return knex('films').where('actors', 'like', '%' + searchTerm + '%')
}

function getFilmsByGenre(searchTerm) {
  return knex('films').where('genres', 'like', '%' + searchTerm + '%')
}

function getFilmsByCountry(searchTerm) {
  return knex('films').where('countries', 'like', '%' + searchTerm + '%')
}

function getFilmsByPlotKeyword(searchTerm) {
  return knex('films').where('plot', 'like', '%' + searchTerm + '%')
}

function getFilmsWithPoster(searchTerm) {
  if (searchTerm === "yes") {
    return knex('films').where('posterURL', '<>', '""')
  } else return knex.raw('SELECT * FROM films WHERE posterURL IS NULL')
}

function hasRunTime(searchTerm) {
  if (searchTerm === 'yes') return knex('films').where('runtime', '<>', 'unknown')
  else return knex.raw('SELECT * FROM films WHERE runtime = "unknown"')
}

function getFilmsByReleaseMonth(searchTerm) {
  return knex('films').where('released', 'like', '%' + searchTerm + '%')
}

// `SELECT * FROM films WHERE runtime <> "unknown" AND runtime BETWEEN + ${lowerLimit} AND ${upperLimit}`

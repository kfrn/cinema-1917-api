const Knex = require('knex')
const config = require('../knexfile')[ process.env.NODE_ENV || 'development' ]
const knex = Knex(config)

module.exports = addFilmtoDB

function addFilmtoDB (film) {
  return knex('films').insert(film)
}

const omdb = require('omdb')
const addFilmtoDB = require('./addFilmtoDB')

module.exports = getFilmData

function getFilmData(id) {
  omdb.get({imdb: id}, true, function(err, res) {
    if (err) return console.error(err)
    if (!res) return console.log("Film not found!")

    var newFilm = {
      title: res.title,
      year: res.year,
      released: isNull(res.released),
      runtime: isNull(res.runtime),
      countries: formatResult(res.countries),
      genres: formatResult(res.genres),
      director: formatResult(res.director),
      writers: formatResult(res.writers),
      actors: formatResult(res.actors),
      plot: formatPlot(res.plot),
      // language: res.language,
      posterURL: res.poster,
      IMDbID: res.imdb.id,
      IMDbrating: res.imdb.rating,
      IMDbvotes: res.imdb.votes,
      type: isNull(res.type)
    }

    console.log({newFilm})

    addFilmtoDB(newFilm)
    .then(function(newFilm) {
      console.log("Film added")
    })
    .catch(function(error) {
      console.log(error)
    })
  })
}

function formatResult(input) {
  if (typeof input === 'string') return input
  else if (input.length === 0) return 'unknown'
  else if (input.length === 1) return input[0]
  else return input.join(", ")
}

function isNull(input) {
  if (input) return String(input)
  else return 'unknown'
}

function formatPlot(input) {
  if (input) return input
  else return 'unknown'
}

// Testing
getFilmData('tt0008663')

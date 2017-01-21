var express = require('express')
var router = express.Router()
var datafromDB = require('../db-functions/datafromDB')

/* GET random film */
// http://localhost:3000/api/v1/random/
router.get('/random/', function(req, res, next) {
  datafromDB.getAllFilms()
    .then((req) => {
      var randomFilm = req[Math.floor(Math.random() * req.length)]
      console.log({randomFilm})
      res.status(200)
      res.json({randomFilm})
    })
    .catch(function(error) {
      res.send(error)
    })
})

/* GET films via keyword search for title, director, writer or actor */
// http://localhost:3000/api/v1/films?title=green
router.get('/films', function(req, res, next) {
  var searchType = Object.keys(req.query)[0]
  var searchTerm = req.query[Object.keys(req.query)[0]]
  console.log({searchType}, {searchTerm})
  switch (searchType) {
    case 'title':
      datafromDB.getFilmsByTitle(searchTerm)
      .then((results) => {
        res.status(200)
        res.json({results})
      })
      .catch(function(error) {
        res.send(error)
      })
      break
    case 'director':
      datafromDB.getFilmsByDirector(searchTerm)
      .then((results) => {
        res.status(200)
        res.json({results})
      })
      .catch(function(error) {
        res.send(error)
      })
      break
    case 'writer':
      datafromDB.getFilmsByWriter(searchTerm)
      .then((results) => {
        res.status(200)
        res.json({results})
      })
      .catch(function(error) {
        res.send(error)
      })
      break
    case 'actor':
      datafromDB.getFilmsByActor(searchTerm)
      .then((results) => {
        res.status(200)
        res.json({results})
      })
      .catch(function(error) {
        res.send(error)
      })
      break
    case 'genre':
      datafromDB.getFilmsByGenre(searchTerm)
      .then((results) => {
        res.status(200)
        res.json({results})
      })
      .catch(function(error) {
        res.send(error)
      })
      break
    case 'country':
      datafromDB.getFilmsByCountry(searchTerm)
      .then((results) => {
        res.status(200)
        res.json({results})
      })
      .catch(function(error) {
        res.send(error)
      })
      break
    case 'plotKeyword':
      datafromDB.getFilmsByPlotKeyword(searchTerm)
      .then((results) => {
        res.status(200)
        res.json({results})
      })
      .catch(function(error) {
        res.send(error)
      })
      break
    case 'hasPoster':
      datafromDB.getFilmsWithPoster(searchTerm)
      .then((results) => {
        res.status(200)
        res.json({results})
      })
      .catch(function(error) {
        res.send(error)
      })
      break
    case 'hasRuntime':
      datafromDB.hasRunTime(searchTerm)
      .then((results) => {
        res.status(200)
        res.json({results})
      })
      .catch(function(error) {
        res.send(error)
      })
      break
    case 'releaseMonth':
      datafromDB.getFilmsByReleaseMonth(searchTerm)
      .then((results) => {
        res.status(200)
        res.json({results})
      })
      .catch(function(error) {
        res.send(error)
      })
      break
    // case 'actor':
    //   datafromDB.getFilmsByActor(searchTerm)
    //   .then((results) => {
    //     console.log({results})
    //     res.status(200)
    //     res.json({results})
    //   })
    //   .catch(function(error) {
    //     res.send(error)
    //   })
    //   break
    // case 'actor':
    //   datafromDB.getFilmsByActor(searchTerm)
    //   .then((results) => {
    //     console.log({results})
    //     res.status(200)
    //     res.json({results})
    //   })
    //   .catch(function(error) {
    //     res.send(error)
    //   })
    //   break
    default:
      res.send('Please use a valid query')
  }
})

module.exports = router

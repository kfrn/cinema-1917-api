var express = require('express')
var router = express.Router()
var getAllFilms = require('../db-functions/datafromDB').getAllFilms
var getFilmsByTitle = require('../db-functions/datafromDB').getFilmsByTitle

/* GET random film */
// http://localhost:3000/api/v1/random/
router.get('/random/', function(req, res, next) {
  getAllFilms()
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

/* GET films via title keyword search */
// http://localhost:3000/api/v1/films/
router.get('/films/', function(req, res, next) {
  var searchTerm = req.headers.titlekeyword
  getFilmsByTitle(searchTerm)
    .then((results) => {
      console.log({results})
      res.status(200)
      res.json({results})
    })
    .catch(function(error) {
      res.send(error)
    })
})

module.exports = router

const express = require('express')
const router = express.Router()
const datafromDB = require('../db-functions/datafromDB')

/* GET random film */
// http://localhost:3000/api/v1/random/
router.get('/random/', function (req, res, next) {
  datafromDB.getAllFilms()
    .then((results) => {
      const randomFilm = results[Math.floor(Math.random() * results.length)]
      console.log({randomFilm})
      res.status(200)
      res.json({randomFilm})
    })
    .catch(function (error) {
      res.send(error)
    })
})

/* GET films via search */
// http://localhost:3000/api/v1/films?title=green
router.get('/films', function (req, res, next) {
  const searchType = Object.keys(req.query)[0]
  const searchTerm = req.query[Object.keys(req.query)[0]]
  console.log({searchType}, {searchTerm})
  switch (searchType) {
    case 'title':
      datafromDB.getFilmsByTitle(searchTerm)
      .then((results) => {
        res.status(200)
        res.json({results})
      })
      .catch(function (error) {
        res.send(error)
      })
      break
    case 'director':
      datafromDB.getFilmsByDirector(searchTerm)
      .then((results) => {
        res.status(200)
        res.json({results})
      })
      .catch(function (error) {
        res.send(error)
      })
      break
    case 'writer':
      datafromDB.getFilmsByWriter(searchTerm)
      .then((results) => {
        res.status(200)
        res.json({results})
      })
      .catch(function (error) {
        res.send(error)
      })
      break
    case 'actor':
      datafromDB.getFilmsByActor(searchTerm)
      .then((results) => {
        res.status(200)
        res.json({results})
      })
      .catch(function (error) {
        res.send(error)
      })
      break
    case 'genre':
      datafromDB.getFilmsByGenre(searchTerm)
      .then((results) => {
        res.status(200)
        res.json({results})
      })
      .catch(function (error) {
        res.send(error)
      })
      break
    case 'country':
      datafromDB.getFilmsByCountry(searchTerm)
      .then((results) => {
        res.status(200)
        res.json({results})
      })
      .catch(function (error) {
        res.send(error)
      })
      break
    case 'plotKeyword':
      datafromDB.getFilmsByPlotKeyword(searchTerm)
      .then((results) => {
        res.status(200)
        res.json({results})
      })
      .catch(function (error) {
        res.send(error)
      })
      break
    case 'hasPoster':
      datafromDB.getFilmsWithPoster(searchTerm)
      .then((results) => {
        res.status(200)
        res.json({results})
      })
      .catch(function (error) {
        res.send(error)
      })
      break
    case 'hasRuntime':
      datafromDB.hasRunTime(searchTerm)
      .then((results) => {
        res.status(200)
        res.json({results})
      })
      .catch(function (error) {
        res.send(error)
      })
      break
    case 'hasReleaseDate':
      datafromDB.hasReleaseDate(searchTerm)
      .then((results) => {
        res.status(200)
        res.json({results})
      })
      .catch(function (error) {
        res.send(error)
      })
      break
    case 'releaseMonth':
      datafromDB.getFilmsByReleaseMonth(searchTerm)
      .then((results) => {
        res.status(200)
        res.json({results})
      })
      .catch(function (error) {
        res.send(error)
      })
      break
    case 'releaseDay':
      if (Number(searchTerm) >= 32) {
        res.send('Please search with a number in the range 1 to 31')
      } else {
        datafromDB.hasReleaseDate('yes')
        .then((initialResults) => {
          if (searchTerm.length === 1) searchTerm = '0' + searchTerm
          const results = initialResults.filter((item) => {
            const firstNumber = item.released.slice(8, 10)
            if (firstNumber === searchTerm) return item
          })
          res.status(200)
          res.json({results})
        })
        .catch(function (error) {
          res.send(error)
        })
      }
      break
    // case 'placeholder':
    //   datafromDB.someFunction(searchTerm)
    //   .then((results) => {
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

/* GET all films - 'SECRET' route! Not in documentation */
// http://localhost:3000/api/v1/all/
router.get('/all/', function (req, res, next) {
  datafromDB.getAllFilms()
    .then((results) => {
      res.status(200)
      res.json({results})
    })
    .catch(function (error) {
      res.send(error)
    })
})

module.exports = router

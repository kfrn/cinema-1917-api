var express = require('express')
var router = express.Router()
var getAllFilms = require('../db-functions/datafromDB').getAllFilms

/* GET all films (random 100 results) */
router.get('/', function(req, res, next) {
  getAllFilms()
    .then((req) => {
      var randomFilm = req[Math.floor(Math.random() * req.length)]
      console.log("There are", req.length, "results - giving you a random pick of that", req.length)
      console.log("A random film is", randomFilm)
      // res.render('film', randomFilm)
    })
    .catch(function(error) {
      console.log(error)
    })
})

// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;

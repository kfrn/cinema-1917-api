var express = require('express')
var router = express.Router()
var getAllFilms = require('../db-functions/datafromDB').getAllFilms

/* GET all films (random 100 results) */
router.get('/films/', function(req, res, next) {
  getAllFilms()
    .then((req) => {
      var randomFilm = req[Math.floor(Math.random() * req.length)]
      console.log("A random film is", randomFilm)
      console.log("There are", req.length, "results - giving you a random pick of that", req.length)
      // res.render('film', randomFilm)
    })
    .catch(function(error) {
      console.log(error)
    })
})

// From Flooki
// router.get('/:user_id', ensureAuthenticated, (req, res, next) => {
//   entriesDb.getAllEntries()
//     .then((entries) => {
//       entriesDb.myFlukes(req.params.user_id)
//         .then((flukes) => {
//           var myFlukes = flukes.map((fluke) => fluke.fluked_entry_id)
//           res.status(200)
//           res.json({entries, myFlukes})
//         })
//         .catch((err) => res.send(err))
//     })
//     .catch((err) => res.send(err))
// })

module.exports = router

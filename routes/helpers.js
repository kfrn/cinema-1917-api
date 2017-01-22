const express = require('express')
const router = express.Router()

const categoryData = require('../db-functions/helperFNs')

// http://localhost:3000/api/v1/countries/
router.get('/countries/', function (req, res, next) {
  categoryData.getCountries()
    .then(function (req) {
      var countryList = req.map((elem) => elem.countries).join(', ').split(', ').filter((item, idx, self) => idx === self.indexOf(item)).sort()
      res.status(200)
      res.json({countryList})
    })
    .catch(function (error) {
      res.send(error)
    })
})

// http://localhost:3000/api/v1/genres/
router.get('/genres/', function (req, res, next) {
  categoryData.getGenres()
    .then(function (req) {
      var genres = req.map((elem) => elem.genres).join(', ').split(', ').filter((item, idx, self) => idx === self.indexOf(item)).sort()
      res.status(200)
      res.json({genres})
    })
    .catch(function (error) {
      res.send(error)
    })
})

module.exports = router

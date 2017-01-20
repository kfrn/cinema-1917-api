const express = require('express')
const router = express.Router()

const categoryData = require('../db-functions/helperFNs')

router.get('/countries/', function(req, res, next) {
  categoryData.getCountries()
    .then(function(req) {
      var countryList = req.map((elem) => elem.countries)
      // TODO. Doesn't account for two word countries e.g. South Africa. 
      countryList = countryList.join(" ").replace(/\,/g, '').split(" ").sort().filter((item, idx, self) => idx == self.indexOf(item))
      res.json({countryList})
    })
    .catch(function(error) {
      res.send(error)
    })
})

router.get('/genres/', function(req, res, next) {
  categoryData.getGenres()
    .then(function(req) {
      var genres = req.map((elem) => elem.genres).join(', ').split(", ").filter((item, idx, self) => idx == self.indexOf(item)).sort()
      res.json({genres})
    })
    .catch(function(error) {
      res.send(error)
    })
})

module.exports = router

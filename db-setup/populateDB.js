const getHTML = require('./extractFromHTML').getHTML
const extractURLs = require('./extractFromHTML').extractURLs
const extractIDs = require('./extractFromHTML').extractIDs
const getFilmData = require('./getFilmData')

function populateDB() {
  getHTML("http://www.imdb.com/search/title?count=500&release_date=1917-01-01,1917-12-31&sort=year,asc")
    .then (function(result) {
      var IMDbURLs = extractURLs(result)
      var IMDbIDs = extractIDs(IMDbURLs)
      console.log(`Result: ${IMDbIDs.length} films`)
      IMDbIDs.forEach(getFilmData)
    })
    .catch (function(error) {
      console.log(error);
    })
}

// Testing
populateDB()
// var url = "http://www.imdb.com/search/title?count=6000&release_date=1917-01-01,1917-12-31&sort=year,asc"

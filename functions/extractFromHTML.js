const request = require('superagent')
const cheerio = require('cheerio')

function getHTML(url) {
  return new Promise (function (resolve, reject) {
    request
    .get(url)
    .end(function (error, res) {
      if (error) {
        reject(error)
      } else {
        resolve(res.text)
      }
    })
  })
}

function extractURLs(html) {
  $ = cheerio.load(html)
  var listURLs = []
  URLs = $('.lister-item-header a').each(function() {
    listURLs.push($(this).attr('href'))
  })
  return listURLs
}

function extractIDs(arrayofURLs) {
  var IMDbIDs = arrayofURLs.map(elem => elem.match(/tt\d+/))
  return IMDbIDs.map(elem => elem[0])
}

// Overall FN (TEMP!)
function populateDB(url) {
  getHTML(url)
  // getIMDbIDs.getPage(getIMDbIDs.buildIMDbURL()) //
    .then (function(result) {
      var IMDbURLs = extractURLs(result)
      var IMDbIDs = extractIDs(IMDbURLs)
      // console.log("The IMDbIDs are", IMDbIDs);
      console.log(`Result: ${IMDbIDs.length} films`)
      console.log(IMDbIDs[8]);
      // IMDbIDs.forEach(getFilmData)
    })
    .catch (function(error) {
      console.log(error);
    })
}


// Testing
populateDB("http://www.imdb.com/search/title?count=50&release_date=1917-01-01,1917-12-31&sort=year,asc")
// var url = "http://www.imdb.com/search/title?count=6000&release_date=1917-01-01,1917-12-31&sort=year,asc"

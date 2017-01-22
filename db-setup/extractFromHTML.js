const request = require('superagent')
const cheerio = require('cheerio')

module.exports = {
  getHTML,
  extractURLs,
  extractIDs
}

function getHTML (url) {
  return new Promise(function (resolve, reject) {
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

function extractURLs (html) {
  $ = cheerio.load(html)
  var listURLs = []
  URLs = $('.lister-item-header a').each(function () {
    listURLs.push($(this).attr('href'))
  })
  return listURLs
}

function extractIDs (arrayofURLs) {
  var IMDbIDs = arrayofURLs.map(elem => elem.match(/tt\d+/))
  return IMDbIDs.map(elem => elem[0])
}

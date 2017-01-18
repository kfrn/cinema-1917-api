# API Documentation

This API returns JSON-encoded data on films released in 1917.  

As the dataset is static, the API only supports GET requests. It can do the following:

* [Return data on a random film](#return-data-on-a-random-film)
* [Search by title keyword](#search-by-title-keyword)
* Search by person (director, writer, actor)
* Search by plot keyword
* Search by genre
* Search by country
* Search for films by presence of poster
* Search by runtime
* Search by release date  

## Requests

### Return data on a random film

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET | `/v1/random` | Get data on a random film | data object |

#### Response

##### Status Codes:
 * On success, the HTTP status code in the response header is 200 ('OK').
 * In case of server error, the header status code is a 5xx error code and the response body contains an error object.

The get request will return an object with the key "randomFilm"; the value is an object containing data about that film.

    {
      "randomFilm": {
          "id": 1330,
          "title": "Public Prosecutor",
          "year": 1917,
          "released": "Tue Feb 20 1917 00:00:00 GMT+1300 (DST)",
          "runtime": "unknown",
          "countries": "Russia",
          "genres": "unknown",
          "director": "Yakov Protazanov",
          "writers": "unknown",
          "actors": "Nathalie Lissenko, Ivan Mozzhukhin, Vera Orlova",
          "plot": "unknown",
          "posterURL": null,
          "IMDbID": "tt0008473",
          "IMDbRating": null,
          "IMDbVotes": null,
          "type": "movie"
      }
    }

([back to top](#api-documentation))

### Search by title keyword

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET | `/v1/films/` | Get data on films by title search | data object |

The get object must take the form:

    {
      titleKeyword: "banana"
    }

#### Response

##### Status Codes:
 * On success, the HTTP status code in the response header is 200 ('OK').
 * In case of server error, the header status code is a 5xx error code and the response body contains an error object.

The get request will return an object with the key "randomFilm"; the value is an object containing data about that film.

    {
      results:
        tba
    }

([back to top](#api-documentation))

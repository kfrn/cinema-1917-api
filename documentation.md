# API Documentation

This API returns JSON-encoded data on films released in 1917.  

As the dataset is static, the API only supports GET requests. It can do the following:

* [Return data on a random film](#return-data-on-a-random-film)
* [Search by title or person](#search-by-title-or-person)y
* Search by plot keyword y
* Search by genre y
* Search by country y
* Search for films by presence of poster y
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

The get request will return an object with the key "randomFilm", containing an object with data about the film.

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

### Search by title or person

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET | `/v1/films/?` | Return films matching the search term | Array of film objects |

For searching by title, director, writer, or actors, this API uses query strings that take the form:

    /v1/films?{searchType}={searchTerm}

e.g.:

    /v1/films?title=green
    /v1/films?actor=Borelli
    /v1/films?director=Feuillade

This is a keyword search, meaning that 'gold' will also match 'golden', etc.

To match a full name or phrase, the space(s) between the words must be replaced by a plus sign:

    /v1/films?director=Yevgeni+Bauer
    /v1/films?director=Cecil+B.+DeMille

Capitalization is not required, as the search is not case-sensitive, but initials must be followed by a full stop, as above.

#### Response

##### Status Codes:
 * On success, the HTTP status code in the response header is 200 ('OK').
 * In case of server error, the header status code is a 5xx error code and the response body contains an error object.

The get request will return an object with the key "results" and an array of objects, each containing data on a film that matched the search parameter.

    {
      "results": [
        {
          "id": 394,
          "title": "The Green Door",
          "year": 1917,
          "released": "Sun May 06 1917 00:00:00 GMT+1200 (STD)",
          "runtime": "20",
          "countries": "USA",
          "genres": "Short, Comedy, Romance",
          "director": "Thomas R. Mills",
          "writers": "O. Henry, A. Van Buren Powell",
          "actors": "Mildred Manning, Walter McGrail",
          "plot": "A piano clerk in New York City hopes for adventure and ultimately finds romance.",
          "posterURL": null,
          "IMDbID": "tt0008034",
          "IMDbRating": null,
          "IMDbVotes": null,
          "type": "movie"
        },
        {
          "id": 1536,
          "title": "The Long Green Trail",
          "year": 1917,
          "released": "Fri Aug 24 1917 00:00:00 GMT+1200 (STD)",
          "runtime": "unknown",
          "countries": "unknown",
          "genres": "Short, Drama",
          "director": "Harry Beaumont",
          "writers": "H. Tipton Steck",
          "actors": "James C. Carroll, Marguerite Clayton, Rod La Rocque, Virginia Valli",
          "plot": "unknown",
          "posterURL": null,
          "IMDbID": "tt0492162",
          "IMDbRating": null,
          "IMDbVotes": null,
          "type": "movie"
        },
        {
          "id": 4272,
          "title": "Green Eyes and Bullets",
          "year": 1917,
          "released": "Sat Sep 29 1917 00:00:00 GMT+1200 (STD)",
          "runtime": "unknown",
          "countries": "USA",
          "genres": "Short, Comedy",
          "director": "Al Christie",
          "writers": "Al Christie",
          "actors": "Jay Belasco, Gino Corrado, Patricia Palmer, Lucille Pietz",
          "plot": "unknown",
          "posterURL": null,
          "IMDbID": "tt0460202",
          "IMDbRating": null,
          "IMDbVotes": null,
          "type": "movie"
        }
      ]
    }

([back to top](#api-documentation))

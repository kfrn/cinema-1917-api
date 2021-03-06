# API Documentation

This API returns JSON-encoded data on films released in 1917. It's live on Heroku at http://cinema-1917-api.herokuapp.com/api.

As the dataset is static, the API only supports GET requests. It can do the following:

* [Return data on a random film](#return-data-on-a-random-film)
* [Search films using a range of parameters](#search-by-parameter), including title, director, actor, genre, country, plot keyword, poster, release date, etc
* Return a list of the [countries or genres](#country-and-genre-lists) represented in the dataset

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

### Search by parameter

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET | `/v1/films/?` | Return films matching the search term | Array of film objects |

For searching the film records, this API uses query strings that take the form:

    /v1/films?{searchType}={searchTerm}

e.g.:

    /v1/films?title=green
    /v1/films?actor=Borelli
    /v1/films?director=Feuillade

Here are a list of the search parameters that are supported:

| Type of search | Valid search terms | Example |
| ------ | -------- | ----- |
| title | Any string, e.g. "uomini" | `/v1/films?title=uomini` |
| director | Any string, e.g. "Lubitsch" | `/v1/films?director=lubitsch` |
| writer | Any string, e.g. "Annunzio" | `/v1/films?director=Annunzio` |
| actor | Any string, e.g. "Kholodnaya" | `/v1/films?actor=Kholodnaya` |
| genre | <p>To see a list of the genres represented in the dataset, click [here](./genres_and_countries.md#genres).</p> <p>To access a list of the genres directly via the API, see [here](#country-and-genre-lists).</p>   | `/v1/films?genre=war` |
| country | <p>To see a list of the countries represented in the dataset, click [here](./genres_and_countries.md#countries).</p> <p>To access a list of the countries directly via the API, see [here](#country-and-genre-lists).</p> | `/v1/films?country=Norway` |
| plotKeyword | Any string, e.g. "banana" | `/v1/films?plotKeyword=banana` |
| hasPoster | `yes` or `no` | `/v1/films?hasPoster=yes` |
| hasRuntime | `yes` or `no` | `/v1/films?hasRuntime=yes` |
| hasReleaseDate | `yes` or `no` | `/v1/films?hasReleaseDate=yes` |
| releaseMonth | The short forms of the months: `Jan`, `Feb`, `Mar`, `Apr`, `May`, `Jun`, `Jul`, `Aug`, `Sep`, `Oct`, `Nov`, `Dec`. | `/v1/films?releaseMonth=Sep` |
| releaseDay | Number in the range 1 to 31 | `/v1/films?releaseDay=13` |

##### Search notes  

* The search is **not case-sensitive**: `Bauer` will return the same list of matches as `bauer`.

* The text search queries operate via **pattern matching**, meaning that 'gold' will also match 'golden', 'gli' will also match 'moglie', etc.

* To match a **full name or phrase**, the space(s) between the words must be replaced by a plus sign:
      ```
      /v1/films?country=South+Africa  
      /v1/films?director=Yevgeni+Bauer  
      ```  

* In names (or elsewhere), initials must be followed by a full stop. Correct:
      ```
      /v1/films?director=Cecil+B.+DeMille
      ```  
  Incorrect:
      ```
      /v1/films?director=Cecil+B+DeMille
      ```  

#### Response

##### Status Codes:
 * On success, the HTTP status code in the response header is 200 ('OK').
 * In case of server error, the header status code is a 5xx error code and the response body contains an error object.

The get request will return an object with the key "results" and an array of objects, each containing data on a film that matched the search parameter. For example, the request `/v1/films?title=green` will return:

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

If no results are found, the result will be an empty array. For example, the request `/v1/films?title=silver` will return:

    {
      "results": [
      ]
    }

If a request is badly formed, the message `Please use a valid query` will be returned.

If running the server locally, several of the queries will not work correctly, as they use PostgreSQL-specific expression `ILIKE`. Such queries to the local (SQLite) database will return the following:

    {
      "errno": 1,
      "code": "SQLITE_ERROR"
    }

([back to top](#api-documentation))

### Country and genre lists

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET | `/v1/countries/` | Return list of countries | object containing array of strings |
| GET | `/v1/genres/` | Return list of genres | object containing array of strings |

#### Response

##### Status Codes:
 * On success, the HTTP status code in the response header is 200 ('OK').
 * In case of server error, the header status code is a 5xx error code and the response body contains an error object.

The get request will return an object with the key "countries" or "genres", containing an array which lists all of the countries/genres represented in the dataset.

    {
      "countries": [
        "Africa",
        "Argentina",
        "Australia",
        // etc
      ]
    }

([back to top](#api-documentation))

### Potential future features

* Search films by runtime, specifying range (lower limit, upper limit)

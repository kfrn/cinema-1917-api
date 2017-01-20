# API Documentation

This API returns JSON-encoded data on films released in 1917.  

As the dataset is static, the API only supports GET requests. It can do the following:

* [Return data on a random film](#return-data-on-a-random-film)
* [Search films using a range of parameters](#search-by-parameter), including title, director, actor, genre, country, plot keyword
* Return the [countries and genres](#country-and-genre-lists) represented in the dataset

To fix
* Has poster
* Has runtime

To add?
* Runtime - with lower & upper limits
* Release date - day/month?

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
| genre | The following genres are represented in the dataset:  <ul><li>Action</li><li>Adventure</li><li>Animation</li><li>Biography</li><li>Comedy</li><li>Crime</li><li>Documentary</li><li>Drama</li><li>Family</li><li>Fantasy</li><li>History</li><li>Horror</li><li>Music</li><li>Musical</li><li>Mystery</li><li>News</li><li>Romance</li><li>Sci-Fi</li><li>Short <sup><a href="#fn1" id="ref1">1</a></sup></li><li>Sport</li><li>Thriller</li><li>War</li><li>Western</li></ul> <p>Note that for many films, the genre(s) are unknown.</p> <p>To access a list of genres directly via the API, [see here](#country-and-genre-lists).</p> <sup id="fn1">1. Although I would not consider 'short' a genre <em>per se</em>, it is listed as such on IMDb.</sup>  | `/v1/films?genre=war` |
| country | The following countries are represented in the dataset:  <ul><li>Argentina</li><li>Australia</li><li>Austria</li><li>Azerbaijan</li><li>Belgium</li><li>Bolivia</li><li>Brazil</li><li>Bulgaria</li><li>Chile</li><li>Czechoslovakia</li><li>Denmark</li><li>France</li><li>Germany</li><li>Greece</li><li>Hungary</li><li>India</li><li>Ireland</li><li>Italy</li><li>Japan</li><li>Mexico</li><li>Netherlands</li><li>Norway</li><li>Poland</li><li>Portugal</li><li>Russia</li><li>South Africa</li><li>Spain</li><li>Sweden</li><li>Switzerland</li><li>Turkey</li><li>UK</li><li>USA</li><li>Yugoslavia</li></ul>  <p>Please use the above spellings and not variants (e.g., U.S.A. instead of USA).</p> <p>To access a list of countries directly via the API, [see here](#country-and-genre-lists).</p> <p>Also note that some films' country of production is unknown.</p> | `/v1/films?country=Norway` |
| plotKeyword | Any string, e.g. "banana" | `/v1/films?plotKeyword=banana` |
<!-- | x | x | x | -->

<!-- <li>item2</li> -->

##### Search notes  

* The search queries operate via **pattern matching**, meaning that 'gold' will also match 'golden', etc.

* To match a **full name or phrase**, the space(s) between the words must be replaced by a plus sign:

      /v1/films?country=South+Africa  
      /v1/films?director=Yevgeni+Bauer  
      /v1/films?director=Cecil+B.+DeMille  

* **Capitalization is not required**, as the search is not case-sensitive, but initials must be followed by a full stop, as shown above.

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

([back to top](#api-documentation))

### Country and genre lists

| Method | Endpoint | Usage | Returns |
| ------ | -------- | ----- | ------- |
| GET | `/v1/countries/` | Return list of countries | object with array of strings |
| GET | `/v1/genres/` | Return list of genres | object with array of strings |

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

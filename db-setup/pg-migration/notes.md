**_Issue_**: Have CSV export of SQLite database (`film-data.csv`), need to import this into PostgreSQL database on the Heroku side.

**Solution**:
* Add `film-data.csv` to project and push to heroku master. Then run this script:

* `PGPASSWORD=<mypassword>  psql -h <host> -U <user> <dbname> -c "\copy films FROM 'film-data.csv' WITH CSV;"`
  * Solution via [this gist](https://gist.github.com/jboesch/5605747) by **jboesch** :)

------

**_Issue_**: 183 films use double quotes ("like this") in their plot description. This breaks the CSV structure and throws off the import.

* `SELECT * FROM films WHERE plot LIKE '%"%'`  
= 183 results.

**Solution**: replace with single quotes/apostrophes. SQL replace command:
* `UPDATE films SET plot = REPLACE(plot, '"' ,'''')`

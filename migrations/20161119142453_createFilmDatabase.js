
exports.up = function(knex, Promise) {
  console.log("Initial table creation")

  return knex.schema.createTableIfNotExists("films", function(table) {
    table.increments('id')
    table.string('title')
    table.integer('year')
    table.text('released')
    table.string('runtime')
    table.string('countries')
    table.string('genres')
    table.string('director')
    table.string('writers')
    table.string('actors')
    table.text('plot')
    table.string('posterURL')
    table.string('IMDbID')
    table.string('IMDbRating')
    table.string('IMDbVotes')
    table.string('type')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("films").then(function() {
    console.log("Films table dropped")
  })
}

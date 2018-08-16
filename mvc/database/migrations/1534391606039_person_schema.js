'use strict'

const Schema = use('Schema')

class PersonSchema extends Schema {
  up () {
    this.create('people', (table) => {
      table.increments()
      table.string('name')
      table.string('description')
      table.timestamps()
    })
  }

  down () {
    this.drop('people')
  }
}

module.exports = PersonSchema

'use strict'

/**
 * Resourceful controller for interacting with people
 */
class PersonController {
  /**
   * Show a list of all people.
   * GET people
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new person.
   * GET people/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new person.
   * POST people
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single person.
   * GET people/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing person.
   * GET people/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update person details.
   * PUT or PATCH people/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a person with id.
   * DELETE people/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = PersonController

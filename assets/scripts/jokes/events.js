'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
// const store = require('../store')

const onCreateJoke = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  api.createJoke(data)
    .then(ui.onCreateJokeSuccess)
    .catch(ui.onFailure)
}

const onShowJokes = function (event) {
  // event.preventDefault()
  api.showJokes()
    .then(ui.onShowJokesSuccess)
    .catch(ui.onFailure)
}

const onDeleteJoke = function (event) {
  event.preventDefault()
  api.deleteJoke(event.target.id)
    .then(ui.onDeleteJokeSuccess)
    .then(onShowJokes)
    .catch(ui.onFailure)
}

module.exports = {
  onCreateJoke,
  onShowJokes,
  onDeleteJoke
}

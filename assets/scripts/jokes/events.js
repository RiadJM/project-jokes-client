'use strict'
const getFormFields = require('./../../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onInputJoke = function (event) {
  event.preventDefault()
  const form = event.target
  const data = getFormFields(form)
  console.log(data)
  if (store.jokeId) {
    api.editJoke(data)
      .then(ui.onEditJokeSuccess)
      .then(onShowJokes)
      .catch(ui.onFailure)
  } else {
    api.createJoke(data)
      .then(ui.onCreateJokeSuccess)
      .catch(ui.onFailure)
  }
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

const onEditJoke = function (event) {
  event.preventDefault()
  console.log(event.target.id, event.target)
  store.jokeId = event.target.id
  $('#joke-text').val(store.content[event.target.id])
  $('.edit').show()
  $('.createbutton').hide()
}

module.exports = {
  onInputJoke,
  onShowJokes,
  onDeleteJoke,
  onEditJoke
  // onEditSubmit
}

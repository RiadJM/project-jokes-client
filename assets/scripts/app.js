'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
const userEvents = require('./auth/events')
const jokeEvents = require('./jokes/events')

// $('#sign-out').hide()
// $('#change-password').hide()
$('#authBundle').hide()
$('.edit').hide()

$(() => {
  $('#sign-up-form').on('submit', userEvents.onSignUp)
  $('#sign-in-form').on('submit', userEvents.onSignIn)
  $('#change-password').on('submit', userEvents.onChangePassword)
  $('#sign-out').on('click', userEvents.onSignOut)

  $('#show').on('click', jokeEvents.onShowJokes)
  $('#show-jokes-here').on('click', '.deleteButton', jokeEvents.onDeleteJoke)
  $('#show-jokes-here').on('click', '.editButton', jokeEvents.onEditJoke)
  $('#create-joke').on('submit', jokeEvents.onInputJoke)
})

'use strict'

const store = require('./../store')
// Sign up
const onSignUpSuccess = function (response) {
  $('#message').text('Thanks for signing up ' + response.user.email)
  $('#sign-up-form').trigger('reset')
  $('#sign-up-form').hide()
}

const onSignUpFailure = function () {
  $('#message-failure').text('Sign up failed. Self-Destruct sequence activated.')
  $('#sign-up-form').trigger('reset')
}

// Sign in
const onSignInSuccess = function (response) {
  store.user = response.user
  $('#message').text('Thanks for signing in ' + response.user.email)
  $('#sign-in-form').trigger('reset')
  $('#sign-in-form').hide()
  $('#authBundle').show()
}

const onSignInFailure = function () {
  $('#message-failure').text('Sign in failed. Self-Destruct sequence activated.')
  $('#sign-in-form').trigger('reset')
}

// Change password
const onChangePasswordSuccess = function () {
  $('#message').text('Password changed successfully')
  $('#change-password').trigger('reset')
}

const onChangePasswordFailure = function () {
  $('#message-failure').text('Change Password failed. Self-Destruct sequence activated.')
  $('#change-password').trigger('reset')
}

// Sign out
const onSignOutSuccess = function () {
  store.user = null
  $('#message').text('See you next time!')
  $('#authBundle').hide()
  $('#sign-up-form').show()
  $('#sign-in-form').show()
}

const onSignOutFailure = function () {
  $('#message-failure').text('Sign out Failed. Self-Destruct sequence activated.')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}

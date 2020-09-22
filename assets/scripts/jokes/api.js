'use strict'

const config = require('./../config')

const store = require('./../store')

const createJoke = function (data) {
  return $.ajax({
    url: config.apiUrl + '/jokes',
    method: 'POST',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: {
      joke: data
    }
  })
}

const updateJoke = function (data) {
  return $.ajax({
    url: config.apiUrl + '/jokes',
    method: 'PATCH',
    headers: { Authorization: 'Bearer ' + store.user.token },
    data: {
      joke: data
    }
  })
}

const showJokes = function () {
  return $.ajax({
    url: config.apiUrl + '/jokes',
    method: 'GET',
    headers: { Authorization: 'Bearer ' + store.user.token }
  })
}

const deleteJoke = function (jokeId) {
  return $.ajax({
    url: config.apiUrl + '/jokes/' + jokeId,
    method: 'DELETE',
    headers: { Authorization: 'Bearer ' + store.user.token }
  })
}

module.exports = {
  createJoke,
  updateJoke,
  showJokes,
  deleteJoke
}

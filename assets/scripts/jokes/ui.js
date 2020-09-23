const store = require('./../store')

const onCreateJokeSuccess = function (response) {
  $('#message').text('Joke Created!')
  $('#create-joke').trigger('reset')
}

const onFailure = function (response) {
  $('#message').text('Uh Oh! Request Failed')
}

const onShowJokesSuccess = function (response) {
  const jokeData = response.jokes
  let showData = ''
  const content = {}
  jokeData.forEach(ritesh => {
    content[ritesh._id] = ritesh.text
    showData += `<p> ${ritesh.title} </p>
    <p> ${ritesh.text}</p>
    <button id="${ritesh._id}" class='editButton' type="button">Edit Joke</button>
    <button id="${ritesh._id}" class='deleteButton' type="button">Delete Joke</button>`
  })
  store.content = content
  $('#show-jokes-here').html(showData)
}

const onDeleteJokeSuccess = function () {
  $('#message').text('Joke Deleted!')
}

const onEditJokeSuccess = function () {
  $('#message').text('Joke Edited!')
  $('#create-joke').trigger('reset')
  $('.edit').hide()
  $('.createbutton').show()
}

module.exports = {
  onCreateJokeSuccess,
  onFailure,
  onShowJokesSuccess,
  onDeleteJokeSuccess,
  onEditJokeSuccess
}

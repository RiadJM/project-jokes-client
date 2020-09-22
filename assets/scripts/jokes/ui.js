// const store = require('./../store')

const onCreateJokeSuccess = function (response) {
  $('#message').text('Joke Created!')
  $('#create-joke').trigger('reset')
}

const onFailure = function (response) {
  $('#message').text('Uh Oh! Request Failed')
}

const onShowJokesSuccess = function (response) {
  console.log('Response is', response)
  const jokeData = response.jokes
  let showData = ''
  jokeData.forEach(ritesh => {
    showData += `<p> ${ritesh.title} </p>
    <p> ${ritesh.text}</p>
    <button id="${ritesh._id}" class='deleteButton' type="button">Delete Joke</button>`
  })
  $('#show-jokes-here').html(showData)
}

const onDeleteJokeSuccess = function () {
  $('#message').text('Joke Deleted!')
}

module.exports = {
  onCreateJokeSuccess,
  onFailure,
  onShowJokesSuccess,
  onDeleteJokeSuccess
}

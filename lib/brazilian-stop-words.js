var stopWords = require('../asset/stop-words')

function filterWord (word) {
  return stopWords.indexOf(word) < 0
}

stopWords.filter = function (text) {
  var string = typeof text === 'string'
  if (string) text = text.split(' ')

  if (Array.isArray(text)) {

    text = text.filter(filterWord)

    if (string) text = text.join(' ')

    return text

  } else throw new Error ('The given text must be an string or an array (of strings).')
}

module.exports = stopWords


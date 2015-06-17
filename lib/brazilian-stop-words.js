var stopWords = require('../asset/stop-words')

stopWords.filterWords = function (text) {
  var string = typeof text === 'string'
  if (string) text = text.split(' ')

  if (Array.isArray(text)) {

    text = text.filter(function (word) { return word && stopWords.indexOf(word) === -1 })

    if (string) text = text.join(' ')

    return text

  } else throw new Error ('The given text must be an string or an array (of strings).')
}

module.exports = stopWords


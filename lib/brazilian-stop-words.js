var brStopWords       = require('../asset/stop-words')
  , NotArrayNorString = require('./errors/not-array-nor-string')
  , NonStringInArray  = require('./errors/non-string-in-array')

brStopWords.filterWords = function (input) {

  // string?
  var string = isString(input)

  // we only play with arrays
  if (string) input = input.split(' ')

  // yup, we only play with arrays
  if (isArray(input)) {

    // did I mention that we only play with arrays... of strings?
    if (allStrings(input)) {

      // filtering empty words and stop words
      input = input.filter(emptyWords).filter(stopWords)

      // here, take it
      return string ? input.join(' ') : input

    } else throw new NonStringInArray()

  } else throw new NotArrayNorString()

}

function isString (input) { return typeof input === 'string' }

function isArray (input) { return Array.isArray(input) }

function allStrings (input) { return input.every(isString) }

function emptyWords (word) { return !!word }

function stopWords (word) { return brStopWords.indexOf(word) === -1 }

module.exports = brStopWords


var assert            = require('assert')
  , brStopWords       = require('../lib/brazilian-stop-words')
  , NotArrayNorString = require('../lib/errors/not-array-nor-string')
  , NonStringInArray  = require('../lib/errors/non-string-in-array')

it('should be an array of strings', function () {

  assert(Array.isArray(brStopWords))
  brStopWords.forEach(function (word) { assert.equal(typeof word, 'string') })

})

it('should filter stop words from a single string', function () {

  assert.equal(
      brStopWords.filterWords('coisas que a gente se esquece de dizer')
    ,                         'coisas gente esquece dizer')

  assert.equal(
      brStopWords.filterWords('frases que o vento vem as vezes me lembrar')
    ,                         'frases vento vem vezes lembrar')

  assert.equal(
      brStopWords.filterWords('coisas que ficaram muito tempo por dizer')
    ,                         'coisas ficaram tempo dizer')

  assert.equal(
      brStopWords.filterWords('na canção do vento não se cansam de voar')
    ,                         'canção vento não cansam voar')

  assert.equal(
      brStopWords.filterWords('você pega o trem azul o sol na cabeça')
    ,                         'você pega trem azul sol cabeça')

  assert.equal(
      brStopWords.filterWords('o sol pega o trem azul você na cabeça')
    ,                         'sol pega trem azul você cabeça')

  assert.equal(
      brStopWords.filterWords('um sol na cabeça')
    ,                         'sol cabeça')

})

it('should filter stop words from an array of strings', function () {

  assert.deepEqual(
      brStopWords.filterWords([ 'coisas', 'que', 'a', 'gente', 'se', 'esquece', 'de', 'dizer' ])
    ,                         [ 'coisas', 'gente', 'esquece', 'dizer' ])

  assert.deepEqual(
      brStopWords.filterWords([ 'frases', 'que', 'o', 'vento', 'vem', 'as', 'vezes', 'me', 'lembrar' ])
    ,                         [ 'frases', 'vento', 'vem', 'vezes', 'lembrar' ])

  assert.deepEqual(
      brStopWords.filterWords([ 'coisas', 'que', 'ficaram', 'muito', 'tempo', 'por', 'dizer' ])
    ,                         [ 'coisas', 'ficaram', 'tempo', 'dizer' ])

  assert.deepEqual(
      brStopWords.filterWords([ 'na', 'canção', 'do', 'vento', 'não', 'se', 'cansam', 'de', 'voar' ])
    ,                         [ 'canção', 'vento', 'não', 'cansam', 'voar' ])

  assert.deepEqual(
      brStopWords.filterWords([ 'você', 'pega', 'o', 'trem', 'azul', 'o', 'sol', 'na', 'cabeça' ])
    ,                         [ 'você', 'pega', 'trem', 'azul', 'sol', 'cabeça' ])

  assert.deepEqual(
      brStopWords.filterWords([ 'o', 'sol', 'pega', 'o', 'trem', 'azul', 'você', 'na', 'cabeça' ])
    ,                         [ 'sol', 'pega', 'trem', 'azul', 'você', 'cabeça' ])

  assert.deepEqual(
      brStopWords.filterWords([ 'um', 'sol', 'na', 'cabeça' ])
    ,                         [ 'sol' , 'cabeça' ])

})

it('should throw when given not a string nor array', function () {

  assert.throws(function () { brStopWords.filterWords()      }, NotArrayNorString)
  assert.throws(function () { brStopWords.filterWords(null)  }, NotArrayNorString)
  assert.throws(function () { brStopWords.filterWords(123)   }, NotArrayNorString)
  assert.throws(function () { brStopWords.filterWords(/lol/) }, NotArrayNorString)

})

it('should throw when there\'s a non string in array', function () {

  assert.throws(function () { brStopWords.filterWords([ '1', 2, '3' ])}, NonStringInArray)

})





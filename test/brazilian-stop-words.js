var assert    = require('assert')
  , stopWords = require('../lib/brazilian-stop-words')

it('should be an array of strings', function () {
  assert(Array.isArray(stopWords))
  stopWords.forEach(function (word) {
    assert.equal(typeof word, 'string')
  })
})

it('should remove stop words from string', function () {
  assert.equal(stopWords.filterWords('coisas que a gente se esquece de dizer'), 'coisas gente esquece dizer')
  assert.equal(stopWords.filterWords('frases que o vento vem as vezes me lembrar'), 'frases vento vem vezes lembrar')
  assert.equal(stopWords.filterWords('coisas que ficaram muito tempo por dizer'), 'coisas ficaram tempo dizer')
  assert.equal(stopWords.filterWords('na canção do vento não se cansam de voar'), 'canção vento não cansam voar')
  assert.equal(stopWords.filterWords('você pega o trem azul o sol na cabeça'), 'você pega trem azul sol cabeça')
  assert.equal(stopWords.filterWords('o sol pega o trem azul você na cabeça'), 'sol pega trem azul você cabeça')
  assert.equal(stopWords.filterWords('um sol na cabeça'), 'sol cabeça')
})

it('should remove stop words from array', function () {
  assert.deepEqual(
    stopWords.filterWords([ 'coisas', 'que', 'a', 'gente', 'se', 'esquece', 'de', 'dizer' ]),
    [ 'coisas', 'gente', 'esquece', 'dizer' ]
  )

  assert.deepEqual(
    stopWords.filterWords([ 'frases', 'que', 'o', 'vento', 'vem', 'as', 'vezes', 'me', 'lembrar' ]),
    [ 'frases', 'vento', 'vem', 'vezes', 'lembrar' ]
  )

  assert.deepEqual(
    stopWords.filterWords([ 'coisas', 'que', 'ficaram', 'muito', 'tempo', 'por', 'dizer' ]),
    [ 'coisas', 'ficaram', 'tempo', 'dizer' ]
  )

  assert.deepEqual(
    stopWords.filterWords([ 'na', 'canção', 'do', 'vento', 'não', 'se', 'cansam', 'de', 'voar' ]),
    [ 'canção', 'vento', 'não', 'cansam', 'voar' ]
  )

  assert.deepEqual(
    stopWords.filterWords([ 'você', 'pega', 'o', 'trem', 'azul', 'o', 'sol', 'na', 'cabeça' ]),
    [ 'você', 'pega', 'trem', 'azul', 'sol', 'cabeça' ]
  )

  assert.deepEqual(
    stopWords.filterWords([ 'o', 'sol', 'pega', 'o', 'trem', 'azul', 'você', 'na', 'cabeça' ]),
    [ 'sol', 'pega', 'trem', 'azul', 'você', 'cabeça' ]
  )

  assert.deepEqual(
    stopWords.filterWords([ 'um', 'sol', 'na', 'cabeça' ]),
    [ 'sol' , 'cabeça' ]
  )
})

it('should throw', function () {
  assert.throws(function() { stopWords.filterWords(null) }, Error)
  assert.throws(function() { stopWords.filterWords(undefined) }, Error)
  assert.throws(function() { stopWords.filterWords(42) }, Error)
})


var assert    = require('assert')
  , stopWords = require('../lib/brazilian-stop-words')

it('should be an array of strings', function () {
  assert(Array.isArray(stopWords))
  stopWords.forEach(function (word) {
    assert.equal(typeof word, 'string')
  })
})

it('should remove stop words from string', function () {
  assert.equal(stopWords.filter('coisas que a gente se esquece de dizer'), 'coisas gente esquece dizer')
  assert.equal(stopWords.filter('frases que o vento vem as vezes me lembrar'), 'frases vento vem vezes lembrar')
  assert.equal(stopWords.filter('coisas que ficaram muito tempo por dizer'), 'coisas ficaram tempo dizer')
  assert.equal(stopWords.filter('na canção do vento não se cansam de voar'), 'canção vento não cansam voar')
  assert.equal(stopWords.filter('você pega o trem azul o sol na cabeça'), 'você pega trem azul sol cabeça')
  assert.equal(stopWords.filter('o sol pega o trem azul você na cabeça'), 'sol pega trem azul você cabeça')
  assert.equal(stopWords.filter('um sol na cabeça'), 'sol cabeça')
})

it('should remove stop words from array', function () {
  assert.deepEqual(
    stopWords.filter([ 'coisas', 'que', 'a', 'gente', 'se', 'esquece', 'de', 'dizer' ]),
    [ 'coisas', 'gente', 'esquece', 'dizer' ]
  )

  assert.deepEqual(
    stopWords.filter([ 'frases', 'que', 'o', 'vento', 'vem', 'as', 'vezes', 'me', 'lembrar' ]),
    [ 'frases', 'vento', 'vem', 'vezes', 'lembrar' ]
  )

  assert.deepEqual(
    stopWords.filter([ 'coisas', 'que', 'ficaram', 'muito', 'tempo', 'por', 'dizer' ]),
    [ 'coisas', 'ficaram', 'tempo', 'dizer' ]
  )

  assert.deepEqual(
    stopWords.filter([ 'na', 'canção', 'do', 'vento', 'não', 'se', 'cansam', 'de', 'voar' ]),
    [ 'canção', 'vento', 'não', 'cansam', 'voar' ]
  )

  assert.deepEqual(
    stopWords.filter([ 'você', 'pega', 'o', 'trem', 'azul', 'o', 'sol', 'na', 'cabeça' ]),
    [ 'você', 'pega', 'trem', 'azul', 'sol', 'cabeça' ]
  )

  assert.deepEqual(
    stopWords.filter([ 'o', 'sol', 'pega', 'o', 'trem', 'azul', 'você', 'na', 'cabeça' ]),
    [ 'sol', 'pega', 'trem', 'azul', 'você', 'cabeça' ]
  )

  assert.deepEqual(
    stopWords.filter([ 'um', 'sol', 'na', 'cabeça' ]),
    [ 'sol' , 'cabeça' ]
  )
})

it('should throw', function () {
  assert.throws(function() { stopWords.filter(null) }, Error)
  assert.throws(function() { stopWords.filter(undefined) }, Error)
  assert.throws(function() { stopWords.filter(42) }, Error)
})


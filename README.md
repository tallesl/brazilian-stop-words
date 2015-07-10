# Brazilian stop words

[![][build-img]][build]
[![][coverage-img]][coverage]
[![][dependencies-img]][dependencies]
[![][devdependencies-img]][devdependencies]
[![][module-img]][module]

[![][npm-img]][npm]

A set of Brazilian stop words.

The module itself is an array of words but there's also a `filterWords` function that receives a text and filters out
stop words from it.

[build]:     https://travis-ci.org/tallesl/brazilian-stop-words)
[build-img]: https://travis-ci.org/tallesl/brazilian-stop-words.png

[coverage]:     https://coveralls.io/r/tallesl/brazilian-stop-words?branch=master
[coverage-img]: https://coveralls.io/repos/tallesl/brazilian-stop-words/badge.png?branch=master

[dependencies]:     https://david-dm.org/tallesl/brazilian-stop-words
[dependencies-img]: https://david-dm.org/tallesl/brazilian-stop-words.png

[devdependencies]:     https://david-dm.org/tallesl/brazilian-stop-words#info=devDependencies
[devdependencies-img]: https://david-dm.org/tallesl/brazilian-stop-words/dev-status.png

[module]:     http://badge.fury.io/js/brazilian-stop-words
[module-img]: https://badge.fury.io/js/brazilian-stop-words.png

[npm]:     https://nodei.co/npm/brazilian-stop-words
[npm-img]: https://nodei.co/npm/brazilian-stop-words.png?mini=true

## Usage

```js
$ npm install brazilian-stop-words
brazilian-stop-words@2.0.1 node_modules/brazilian-stop-words
$ node
> var brStopWords = require('brazilian-stop-words')
undefined
> brStopWords.filter('e o que o ser humano mais aspira e tornar-se ser humano')
'humano aspira tornar-se humano'
```

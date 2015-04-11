# Brazilian stop words

[![build](https://travis-ci.org/tallesl/brazilian-stop-words.png)](https://travis-ci.org/tallesl/brazilian-stop-words)
[![coverage](https://coveralls.io/repos/tallesl/brazilian-stop-words/badge.png?branch=master)](https://coveralls.io/r/tallesl/brazilian-stop-words?branch=master)
[![dependencies](https://david-dm.org/tallesl/brazilian-stop-words.png)](https://david-dm.org/tallesl/brazilian-stop-words)
[![devDependencies](https://david-dm.org/tallesl/brazilian-stop-words/dev-status.png)](https://david-dm.org/tallesl/brazilian-stop-words#info=devDependencies)
[![npm module](https://badge.fury.io/js/brazilian-stop-words.png)](http://badge.fury.io/js/brazilian-stop-words)

[![npm](https://nodei.co/npm/brazilian-stop-words.png?mini=true)](https://nodei.co/npm/brazilian-stop-words/)

A set of Brazilian stop words.

The module itself is an array of words but there's also a `filter` that receives a text and filters out stop words from it.

## Usage
```javascript
$ npm install brazilian-stop-words
brazilian-stop-words@1.0.0 node_modules/brazilian-stop-words
$ node
> var brStopWords = require('brazilian-stop-words')
undefined
> brStopWords.filter('e o que o ser humano mais aspira e tornar-se ser humano')
'humano aspira tornar-se humano'
```

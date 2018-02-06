<p align="center">
  <img src="https://i.imgur.com/508SkFr.png" width="500" alt="SubIn">
</p>

## 🥙 SubIn [![npm](https://img.shields.io/npm/v/sub-in.svg)](https://npm.im/sub-in) [![travis](https://travis-ci.org/peterpme/sub-in.svg?branch=master)](https://travis-ci.org/peterpme/sub-in)

A tiny (115B) find-and-replace utility for strings in Javascript.

# Installation

```
npm install sub-in
```

```
yarn add sub-in
```

# Usage

```es6
const greeting = 'Hey $0, how are you doing?'
subIn(greeting, ['Peter'])

// Hey Peter, how are you doing?
```

```es6
const friends = '$0, $1 and $2 are my friends.'
subIn(friends, ['Jake', 'Tom', 'Zack'])

// Jake, Tom and Zack are my friends
```

# replaceWith

A tiny, fast utility function for string replacement in Javascript.

# Usage

```es6
const greeting = 'Hey $0, how are you doing?'
replaceWith(greeting, ['Peter'])

// Hey Peter, how are you doing?

const friends = '$0, $1 and $2 are my friends.'
replaceWith(friends, ['Jake', 'Tom', 'Zack'])
```

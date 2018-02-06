# subIn

A tiny, fast utility function for string replacement in Javascript.

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
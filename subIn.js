const REGEX = /\$(\d+)/gi;

function subIn(str = '', args) {
  const values = str.replace(REGEX, (str, number) => {
    return args[number];
  });

  return values;
}

module.exports = subIn;

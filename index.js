const REGEX = /\$(\d+)/gi;

function replaceWith(str = '', args) {
  const values = str.replace(REGEX, (str, number) => {
    return args[number];
  });

  return values;
}

module.exports = replaceWith;

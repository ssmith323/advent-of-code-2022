const { getCommands } = require('@util/file');
require('@util/array.js');
const { parseInput } = require('./util');

const part1 = (name) => {
  const input = getCommands(name);
  return Object.values(parseInput(input))
    .filter((i) => i <= 100000)
    .sum();
};

module.exports = { part1 };

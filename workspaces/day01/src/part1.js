const { getCommands } = require('@util/file.js');
const { getCalForElves } = require('./util.js');
require('@util/array.js');

const part1 = (filename) => {
  const input = getCommands(filename);
  const elves = getCalForElves(input);
  return elves.max();
};

module.exports = { part1 };

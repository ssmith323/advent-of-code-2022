const { getCommands } = require('@util/file.js');
const { getCalForElves } = require('./util');

const part2 = (filename) => {
  const input = getCommands(filename);

  const elves = getCalForElves(input).sort((a, b) => b - a);
  return elves[0] + elves[1] + elves[2];
};

module.exports = { part2 };

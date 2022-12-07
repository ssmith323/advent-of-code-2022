const { getCommands } = require('@util/file');
require('@util/array.js');
const { parseInput } = require('./util');

const TOTAL = 70000000;
const NEEDED = 30000000;

const part2 = (name) => {
  const input = getCommands(name);
  const allDir = Object.values(parseInput(input)).sort((a, b) => a - b);
  const totalLeft = TOTAL - allDir[allDir.length - 1];
  for (let i = 0; i < allDir.length; i++) {
    if (allDir[i] + totalLeft >= NEEDED) {
      return allDir[i];
    }
  }
  return allDir;
};
module.exports = { part2 };

const { getCommands } = require('@util/file');
const { checkPartialRanges } = require('./util');

const part2 = (name) =>
  getCommands(name)
    .map((l) => l.split(','))
    .map(checkPartialRanges)
    .filter((b) => b).length;

module.exports = { part2 };

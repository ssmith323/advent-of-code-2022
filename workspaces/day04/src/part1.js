const { getCommands } = require('@util/file.js');
const { checkRanges } = require('./util.js');

const part1 = (name) =>
  getCommands(name)
    .map((l) => l.split(','))
    .map(checkRanges)
    .filter((b) => b).length;

module.exports = { part1 };

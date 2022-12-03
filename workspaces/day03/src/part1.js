const { getCommands } = require('@util/file');
const letters = require('./letters.js');
const { processRucksack } = require('./util.js');
require('@util/array');

const part1 = (filename) =>
  getCommands(filename)
    .map(processRucksack)
    .map((letter) => letters[letter])
    .sum();

module.exports = { part1 };

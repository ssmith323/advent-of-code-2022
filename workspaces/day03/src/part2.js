const { getContents } = require('@util/file');
const letters = require('./letters.js');
const { processGroupRucksack } = require('./util.js');
require('@util/array');

const part2 = (filename) => {
  return getContents(filename)
    .match(/(?:^.*$\n?){1,3}/gm)
    .map(processGroupRucksack)
    .map((letter) => letters[letter])
    .sum();
};

module.exports = { part2 };

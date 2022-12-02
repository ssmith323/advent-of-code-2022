const { getCommands } = require('@util/file.js');
const { play, POINTS } = require('./util');
require('@util/array');

const part1 = (filename) => {
  const input = getCommands(filename);

  return input
    .map((i) => {
      const plays = i.split(' ');
      return play(POINTS[plays[1]], POINTS[plays[0]]) + POINTS[plays[1]];
    })
    .sum();
};

module.exports = { part1 };

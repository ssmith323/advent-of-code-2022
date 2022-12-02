const { getCommands } = require('@util/file.js');
const { play, POINTS, getYourThrow } = require('./util');
require('@util/array');

const part2 = (filename) => {
  const input = getCommands(filename);

  return input
    .map((i) => {
      const plays = i.split(' ');
      const yourThrow = getYourThrow(plays[1], plays[0]);
      return play(yourThrow, POINTS[plays[0]]) + yourThrow;
    })
    .sum();
};

module.exports = { part2 };

const { getCommands } = require('@util/file.js');
const { play, POINTS } = require('./util');
require('@util/array');

const part1 = (filename) =>
  getCommands(filename)
    .map((i) => i.split(' '))
    .map((plays) => play(POINTS[plays[1]], POINTS[plays[0]]) + POINTS[plays[1]])
    .sum();

module.exports = { part1 };

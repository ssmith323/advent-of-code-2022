/* eslint-disable max-depth */
/* eslint-disable max-lines */
/* eslint-disable complexity */
/* eslint-disable no-undef */
/* eslint-disable max-lines-per-function */
const { getCommands } = require('@util/file.js');
const OctopusField = require('./octopus-field.js');

const part2 = (name) => {
  const octopuses = getCommands(name).map((arr) => arr.split('').map(Number));
  const field = new OctopusField(octopuses);

  let count = 0;
  while (field.flashed.some((f) => f.some((b) => !b))) {
    field.reset();

    field.run();
    count++;
  }

  return count;
};

module.exports = { part2 };

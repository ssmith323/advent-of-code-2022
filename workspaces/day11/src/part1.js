const { getCommands } = require('@util/file.js');
const OctopusField = require('./octopus-field.js');
require('@util/array.js');

const part1 = (name) => {
  const octopuses = getCommands(name).map((arr) => arr.split('').map(Number));
  const field = new OctopusField(octopuses);
  let total = 0;
  for (let h = 0; h < 100; h++) {
    field.reset();

    field.run();
    total += field.getFlashed();
  }

  return total;
};

module.exports = { part1 };

const { getCommands } = require('@util/file.js');
const CaveMap = require('./cave-map');

const part1 = (name) => {
  const commands = getCommands(name);
  const caveMap = new CaveMap(commands);
  return caveMap.traverse().length;
};

module.exports = { part1 };

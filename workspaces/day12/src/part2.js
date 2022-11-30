const { getCommands } = require('@util/file.js');
const CaveMap = require('./cave-map');

const part2 = (name) => {
  const commands = getCommands(name);
  const caveMap = new CaveMap(commands);
  return caveMap.traverse(2).length;
};

module.exports = { part2 };

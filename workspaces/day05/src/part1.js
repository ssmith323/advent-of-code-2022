const { getContents } = require('@util/file.js');
const { parseMap, parseCommands } = require('./parser');

const part1 = (name) => {
  const [rawMap, rawCommands] = getContents(name).split('\n\n');
  const map = parseMap(rawMap);
  const commands = parseCommands(rawCommands);
  commands.forEach((c) => {
    for (let i = 0; i < c.move; i++) {
      const item = map[c.start - 1].pop();
      map[c.end - 1].push(item);
    }
  });
  return map.map((arr) => arr[arr.length - 1]).join('');
};

module.exports = { part1 };

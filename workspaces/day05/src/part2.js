const { getContents } = require('@util/file');
const { parseMap, parseCommands } = require('./parser');

const part2 = (name) => {
  const [rawMap, rawCommands] = getContents(name).split('\n\n');
  const map = parseMap(rawMap);
  const commands = parseCommands(rawCommands);
  commands.forEach((c) => {
    const items = map[c.start - 1].splice(
      map[c.start - 1].length - c.move,
      c.move
    );
    map[c.end - 1] = [...map[c.end - 1], ...items];
  });
  return map.map((arr) => arr[arr.length - 1]).join('');
};

module.exports = { part2 };

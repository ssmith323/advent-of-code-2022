/* eslint-disable max-lines-per-function */
const { getCommands } = require('@util/file.js');
const getCounts = require('./letters.js');
require('@util/array.js');

const part1 = (name) => {
  const commands = getCommands(name);
  const start = commands[0].split('');
  const insertionsArr = commands
    .filter((s) => s.includes('->'))
    .map((s) => s.split(' -> '));
  const insertions = new Map(insertionsArr);

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < start.length; j++) {
      if (insertions.has(`${start[j]}${start[j + 1]}`)) {
        start.splice(j + 1, 0, insertions.get(`${start[j]}${start[j + 1]}`));
        j++;
      }
    }
  }
  const counts = getCounts(start).filter((c) => c > 0);
  return counts.max() - counts.min();
};

module.exports = { part1 };

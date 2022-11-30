const { getCommands } = require('@util/file.js');
const Tree = require('./tree.js');
const expand = require('./expand.js');
require('@util/array.js');

const part2 = (name) => {
  const grid = getCommands(name).map((row) => row.split('').map(Number));

  const tree = new Tree(expand(grid));
  return tree
    .search()
    .slice(1)
    .reduce((pre, cur) => cur.value + pre, 0);
};

module.exports = { part2 };

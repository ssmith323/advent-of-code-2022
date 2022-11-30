const { getCommands } = require('@util/file.js');
const Tree = require('./tree.js');
require('@util/array.js');

const part1 = (name) => {
  const grid = getCommands(name).map((row) => row.split('').map(Number));

  const tree = new Tree(grid);
  return tree
    .search()
    .slice(1)
    .reduce((pre, cur) => cur.value + pre, 0);
};

module.exports = { part1 };

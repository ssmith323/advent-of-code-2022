const { getCommands } = require('@util/file.js');
const { parseCommands, getMaxOf, getUnmarkedGrid, fold } = require('./util.js');
require('@util/array.js');

const part1 = (name) => {
  const commands = getCommands(name);
  const { coord, folds } = parseCommands(commands);
  const maxX = getMaxOf(coord, 'x');
  const maxY = getMaxOf(coord, 'y');
  let grid = getUnmarkedGrid(maxX, maxY);
  coord.forEach(([x, y]) => (grid[y][x] = '#'));
  const [dir, line] = folds[0];
  grid = fold(grid, dir, line);
  return grid
    .flat()
    .map((e) => (e === '#' ? 1 : 0))
    .sum();
};

module.exports = { part1 };

/* eslint-disable complexity */
/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
const { getCommands } = require('@util/file.js');
const { parseCommands, getMaxOf, getUnmarkedGrid, fold } = require('./util.js');
const { print } = require('./print.js');

const part2 = (name) => {
  const commands = getCommands(name);
  const { coord, folds } = parseCommands(commands);
  const maxX = getMaxOf(coord, 'x');
  const maxY = getMaxOf(coord, 'y');
  let grid = getUnmarkedGrid(maxX, maxY);
  coord.forEach(([x, y]) => (grid[y][x] = '#'));

  folds.forEach(([dir, line]) => {
    grid = fold(grid, dir, line);
  });
  return print(grid);
};

module.exports = { part2 };

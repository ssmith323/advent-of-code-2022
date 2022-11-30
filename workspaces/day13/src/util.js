/* eslint-disable max-params */
/* eslint-disable complexity */
/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
require('@util/array.js');

const parseCommands = (commands) => {
  const folds = [];
  const coord = [];
  commands
    .filter((c) => c !== '')
    .forEach((c) => {
      if (c.startsWith('fold')) {
        const regex = c.match('fold along ([xy])=(\\d+)');
        folds.push([regex[1], parseInt(regex[2])]);
        return;
      }
      const numbers = c.split(',');
      coord.push([parseInt(numbers[0]), parseInt(numbers[1])]);
    });
  return { coord, folds };
};

const getMaxOf = (coord, dir) =>
  coord
    .flat()
    .map((c, i) => (i % 2 === (dir === 'x' ? 0 : 1) ? c : 0))
    .max();

const getUnmarkedGrid = (x, y) =>
  Array(y + 1)
    .fill()
    .map(() => Array(x + 1).fill('.'));

const fold = (grid, dir, line) => {
  if (dir === 'y') {
    for (let i = 0; i < line; i++) {
      const first = grid[i];
      const second = grid[grid.length - i - 1];
      first.forEach(
        (e, j) => (grid[i][j] = e === '#' || second[j] === '#' ? '#' : '.')
      );
      grid[i] = first;
    }
    grid.splice(line);
    return grid;
  }
  if (dir === 'x') {
    for (let i = 0; i < grid.length; i++) {
      for (let j = 0; j < line; j++) {
        grid[i][j] =
          grid[i][j] === '#' || grid[i][grid[i].length - 1 - j] === '#'
            ? '#'
            : '.';
      }
    }
    return grid.map((a) => a.slice(0, line));
  }
};

module.exports = { parseCommands, getMaxOf, getUnmarkedGrid, fold };

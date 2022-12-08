const { getMap } = require('./util');
const {
  getLeftTrees,
  getRightTrees,
  getTopTrees,
  getDownTrees,
} = require('./util2');
require('@util/array.js');

const part2 = (name) => {
  const map = getMap(name);
  const visibleTrees = Array(map.length)
    .fill()
    .map(() => Array(map[0].length).fill(0));
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      if (
        i === 0 ||
        i === map.length - 1 ||
        j === 0 ||
        j === map[i].length - 1
      ) {
        visibleTrees[i][j] = 0;
      }

      visibleTrees[i][j] =
        getLeftTrees(map, [i, j]) *
        getRightTrees(map, [i, j]) *
        getTopTrees(map, [i, j]) *
        getDownTrees(map, [i, j]);
    }
  }
  return visibleTrees.flat().max();
};

module.exports = { part2 };

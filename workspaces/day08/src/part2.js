const { getMap, getStartingArray } = require('./util');
const {
  getLeftTrees,
  getRightTrees,
  getTopTrees,
  getDownTrees,
  isOnEdge,
} = require('./util2');
require('@util/array.js');

const markTrees = (map, [i, j]) => {
  if (isOnEdge(map, [i, j])) {
    return 0;
  }

  return [
    getLeftTrees(map, [i, j]),
    getRightTrees(map, [i, j]),
    getTopTrees(map, [i, j]),
    getDownTrees(map, [i, j]),
  ].multiply();
};

const part2 = (name) => {
  const map = getMap(name);
  const visibleTrees = getStartingArray(map);
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      visibleTrees[i][j] = markTrees(map, [i, j]);
    }
  }
  return visibleTrees.flat().max();
};

module.exports = { part2 };

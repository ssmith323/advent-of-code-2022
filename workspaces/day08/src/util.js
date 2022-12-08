const { getContents } = require('@util/file.js');
const { check } = require('./check');

const getMap = (name) =>
  getContents(name)
    .split('\n')
    .map((r) => r.split('').map(Number));

const getStartingArray = (map) =>
  Array(map.length)
    .fill()
    .map(() => Array(map[0].length).fill(0));

const getVisibleTrees = (map) => {
  const visibleTrees = getStartingArray(map);
  visibleTrees[0] = visibleTrees[0].fill(1);
  visibleTrees[visibleTrees.length - 1] =
    visibleTrees[visibleTrees.length - 1].fill(1);
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[0].length; j++) {
      visibleTrees[i][j] = check(map, [i, j]);
    }
  }
  return visibleTrees;
};

module.exports = { getStartingArray, getVisibleTrees, getMap };

const { getMap, getVisibleTrees } = require('./util');
require('@util/array.js');

const part1 = (name) => {
  const map = getMap(name);
  return getVisibleTrees(map).flat().sum();
};

module.exports = { part1 };

require('@util/array.js');

const checkLeftWay = (map, [i, j]) => {
  const trees = map[i].slice(0, j + 1).sort((a, b) => b - a);
  return trees[0] === map[i][j] && trees[0] !== trees[1];
};

const checkRightWay = (map, [i, j]) => {
  const trees = map[i].slice(j).sort((a, b) => b - a);
  return trees[0] === map[i][j] && trees[0] !== trees[1];
};

const checkUpWay = (map, [i, j]) => {
  const trees = map
    .map((r) => r[j])
    .slice(0, i + 1)
    .sort((a, b) => b - a);
  return trees[0] === map[i][j] && trees[0] !== trees[1];
};

const checkDownWay = (map, [i, j]) => {
  const trees = map
    .map((r) => r[j])
    .slice(i)
    .sort((a, b) => b - a);
  return trees[0] === map[i][j] && trees[0] !== trees[1];
};

const check = (map, [i, j]) => {
  if (j === 0 || j === map[i].length - 1) {
    return 1;
  }
  return checkLeftWay(map, [i, j]) ||
    checkRightWay(map, [i, j]) ||
    checkUpWay(map, [i, j]) ||
    checkDownWay(map, [i, j])
    ? 1
    : 0;
};

module.exports = {
  check,
  checkUpWay,
  checkDownWay,
  checkRightWay,
  checkLeftWay,
};

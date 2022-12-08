const getLeftTrees = (map, [x, y]) => {
  let visibleTrees = 0;
  for (let i = x - 1; i >= 0; i--) {
    visibleTrees++;
    if (map[x][y] <= map[i][y]) {
      break;
    }
  }
  return visibleTrees;
};

const getRightTrees = (map, [x, y]) => {
  let visibleTrees = 0;
  for (let i = x + 1; i < map.length; i++) {
    visibleTrees++;
    if (map[x][y] <= map[i][y]) {
      break;
    }
  }
  return visibleTrees;
};

const getTopTrees = (map, [x, y]) => {
  let visibleTrees = 0;
  for (let i = y + 1; i < map[x].length; i++) {
    visibleTrees++;
    if (map[x][y] <= map[x][i]) {
      break;
    }
  }
  return visibleTrees;
};

const getDownTrees = (map, [x, y]) => {
  let visibleTrees = 0;
  for (let i = y - 1; i >= 0; i--) {
    visibleTrees++;
    if (map[x][y] <= map[x][i]) {
      break;
    }
  }
  return visibleTrees;
};

module.exports = { getDownTrees, getRightTrees, getTopTrees, getLeftTrees };

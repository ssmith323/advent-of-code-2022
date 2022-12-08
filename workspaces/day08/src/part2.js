const { getMap } = require('./util');
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
      let leftTrees = 0;
      for (let left = i - 1; left >= 0; left--) {
        leftTrees++;
        if (map[i][j] <= map[left][j]) {
          break;
        }
      }
      let rightTrees = 0;
      for (let right = i + 1; right < map.length; right++) {
        rightTrees++;
        if (map[i][j] <= map[right][j]) {
          break;
        }
      }

      let topTrees = 0;
      for (let top = j + 1; top < map[i].length; top++) {
        topTrees++;
        if (map[i][j] <= map[i][top]) {
          break;
        }
      }

      let downTrees = 0;
      for (let down = j - 1; down >= 0; down--) {
        downTrees++;
        if (map[i][j] <= map[i][down]) {
          break;
        }
      }

      visibleTrees[i][j] = leftTrees * rightTrees * topTrees * downTrees;
    }
  }
  return visibleTrees.flat().max();
};

module.exports = { part2 };

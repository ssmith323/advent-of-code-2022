/* eslint-disable max-depth */
/* eslint-disable max-lines */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
const Node = require('./node.js');

const findLowerIndex = (openSet) => {
  let lowestIndex = 0;
  for (let i = 0; i < openSet.length; i++) {
    if (openSet[i].g < openSet[lowestIndex].g) {
      lowestIndex = i;
    }
  }
  return lowestIndex;
};

module.exports = class Tree {
  constructor(arr) {
    this.grid = arr.map((row, i) =>
      row.map((item, j) => new Node({ value: item, i, j }))
    );

    for (let i = 0; i < this.grid.length; i++) {
      for (let j = 0; j < this.grid[0].length; j++) {
        this.grid[i][j].updateNeighbors(this.grid);
      }
    }
  }

  search() {
    const start = this.grid[0][0];
    const end = this.grid[this.grid.length - 1][this.grid[0].length - 1];

    const openSet = [start];
    const closedSet = [];
    const path = [];
    while (openSet.length > 0) {
      const lowestIndex = findLowerIndex(openSet);
      const current = openSet[lowestIndex];

      if (current === end) {
        let temp = current;
        path.push(temp);
        while (temp.parent) {
          path.push(temp.parent);
          temp = temp.parent;
        }
        return path.reverse();
      }

      openSet.splice(lowestIndex, 1);
      closedSet.push(current);

      const neighbors = current.neighbors;

      for (let i = 0; i < neighbors.length; i++) {
        const neighbor = neighbors[i];

        if (!closedSet.includes(neighbor)) {
          const possibleG = current.g + neighbor.value;

          if (!openSet.includes(neighbor)) {
            openSet.push(neighbor);
          } else if (possibleG > neighbor.g) {
            continue;
          }

          neighbor.g = possibleG;
          neighbor.parent = current;
        }
      }
    }
    return [];
  }
};

module.exports = class Node {
  constructor({ value, i, j }) {
    this.name = `${j}, ${i}`;
    this.i = i;
    this.j = j;
    this.value = value;
    this.g = 0;
    this.h = 0;
    this.neighbors = [];
    this.parent = undefined;
  }

  updateNeighbors(grid) {
    if (this.i < grid.length - 1) {
      this.neighbors.push(grid[this.i + 1][this.j]);
    }
    if (this.i > 0) {
      this.neighbors.push(grid[this.i - 1][this.j]);
    }
    if (this.j < grid[0].length - 1) {
      this.neighbors.push(grid[this.i][this.j + 1]);
    }
    if (this.j > 0) {
      this.neighbors.push(grid[this.i][this.j - 1]);
    }
  }
};

/* eslint-disable max-lines */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
const getNonFlashed = () =>
  Array(10)
    .fill()
    .map(() =>
      Array(10)
        .fill()
        .map(() => false)
    );

module.exports = class OctopusField {
  constructor(map) {
    this.field = map;
    this.flashed = getNonFlashed();
  }

  reset() {
    this.flashed = getNonFlashed();
  }

  getFlashed() {
    return this.flashed
      .flat()
      .map((f) => (f ? 1 : 0))
      .sum();
  }

  run() {
    for (let i = 0; i < this.field.length; i++) {
      for (let j = 0; j < this.field[i].length; j++) {
        if (!this.flashed[j][i]) {
          this.flash(j, i);
        }
      }
    }
  }

  flash(x, y) {
    if (this.field[y][x] < 9) {
      this.field[y][x]++;
      return;
    }
    this.flashed[x][y] = true;
    this.field[y][x] = 0;
    if (typeof this.field[y + 1] !== 'undefined') {
      if (!this.flashed[x][y + 1]) {
        this.flash(x, y + 1);
      }
      if (
        typeof this.field[y + 1][x + 1] !== 'undefined' &&
        !this.flashed[x + 1][y + 1]
      ) {
        this.flash(x + 1, y + 1);
      }
      if (
        typeof this.field[y + 1][x - 1] !== 'undefined' &&
        !this.flashed[x - 1][y + 1]
      ) {
        this.flash(x - 1, y + 1);
      }
    }
    if (typeof this.field[y - 1] !== 'undefined') {
      if (!this.flashed[x][y - 1]) {
        this.flash(x, y - 1);
      }
      if (
        typeof this.field[y - 1][x + 1] !== 'undefined' &&
        !this.flashed[x + 1][y - 1]
      ) {
        this.flash(x + 1, y - 1);
      }
      if (
        typeof this.field[y - 1][x - 1] !== 'undefined' &&
        !this.flashed[x - 1][y - 1]
      ) {
        this.flash(x - 1, y - 1);
      }
    }
    if (
      typeof this.field[y][x + 1] !== 'undefined' &&
      !this.flashed[x + 1][y]
    ) {
      this.flash(x + 1, y);
    }
    if (
      typeof this.field[y][x - 1] !== 'undefined' &&
      !this.flashed[x - 1][y]
    ) {
      this.flash(x - 1, y);
    }
  }
};

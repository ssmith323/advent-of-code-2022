Array.prototype.sum = function () {
  return this.reduce((pre, cur) => pre + cur);
};

Array.prototype.multiply = function () {
  return this.reduce((pre, cur) => pre * cur);
};

Array.prototype.min = function () {
  return this.reduce((pre, cur) => Math.min(pre, cur));
};

Array.prototype.max = function () {
  return this.reduce((pre, cur) => Math.max(pre, cur));
};

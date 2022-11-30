/* eslint-disable max-lines */
/* eslint-disable complexity */
/* eslint-disable no-empty */
/* eslint-disable max-lines-per-function */
require('@util/array.js');
const { getCommands } = require('@util/file.js');
const openings = ['(', '[', '<', '{'];
const closings = [')', ']', '>', '}'];
const validChunk = (str) => {
  const arr = str.split('');
  const stack = [];
  for (let i = 0; i < arr.length; i++) {
    const c = arr[i];

    if (openings.includes(c)) {
      stack.push(c);
    } else if (closings.includes(c)) {
      const lastOpening = stack.pop();
      if (
        (c === ')' && lastOpening === '(') ||
        (c === ']' && lastOpening === '[') ||
        (c === '>' && lastOpening === '<') ||
        (c === '}' && lastOpening === '{')
      ) {
      } else {
        return c;
      }
    }
  }
  return true;
};

const valueMap = {
  '>': 25137,
  ')': 3,
  '}': 1197,
  ']': 57,
};

const part1 = (name) => {
  const commands = getCommands(name);
  return commands
    .map(validChunk)
    .filter((c) => c !== true)
    .map((c) => valueMap[c])
    .sum();
};

module.exports = { part1 };

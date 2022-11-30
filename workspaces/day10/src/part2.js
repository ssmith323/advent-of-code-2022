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
  if (stack.length !== 0) {
    return stack;
  }
  return true;
};

const valueMap = {
  '<': 4,
  '(': 1,
  '{': 3,
  '[': 2,
};

const part2 = (name) => {
  const commands = getCommands(name);
  const arr = commands
    .map(validChunk)
    .filter((c) => c !== true && typeof c !== 'string');

  const b = arr
    .map((a) => {
      a = a.reverse();
      let value = 0;
      for (let i = 0; i < a.length; i++) {
        value *= 5;
        value += valueMap[a[i]];
      }
      return value;
    })
    .sort((a, b) => a - b);
  const middle = (b.length - 1) / 2;
  return b[middle];
};

module.exports = { part2 };

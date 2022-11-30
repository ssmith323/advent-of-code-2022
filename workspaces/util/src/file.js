const { readFileSync } = require('fs');
const path = require('path');

const getContents = (name = 'input.txt') =>
  readFileSync(path.join(name), { encoding: 'utf8' });

const getCommands = (name = 'input.txt') => getContents(name).split('\n');

const getNumbers = (name = 'input.txt') =>
  getContents(name).split(',').map(Number);

module.exports = { getCommands, getContents, getNumbers };

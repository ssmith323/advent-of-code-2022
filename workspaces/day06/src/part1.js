const { getContents } = require('@util/file');
const { findMarker } = require('./util');

const part1 = (name) => {
  const input = getContents(name).split('');
  return findMarker(input, 4);
};

module.exports = { part1 };

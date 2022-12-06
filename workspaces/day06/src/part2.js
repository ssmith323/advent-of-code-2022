const { getContents } = require('@util/file');
const { findMarker } = require('./util');

const part2 = (name) => {
  const input = getContents(name).split('');
  return findMarker(input, 14);
};
module.exports = { part2 };

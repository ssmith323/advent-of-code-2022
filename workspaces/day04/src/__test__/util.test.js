const { checkRanges } = require('../util.js');
const { checkPartialRanges } = require('../util');

test('the first is one on the edges', () =>
  expect(checkRanges(['1-1', '1-2'])).toBeTruthy());
test('the second is one on the edges', () =>
  expect(checkRanges(['1-2', '1-1'])).toBeTruthy());
test('some overlap', () => expect(checkRanges(['1-2', '2-3'])).toBeFalsy());
test('some big overlap', () =>
  expect(checkRanges(['1-100', '2-1000'])).toBeFalsy());

test('some overlap', () =>
  expect(checkPartialRanges(['1-2', '2-3'])).toBeTruthy());
test('big overlap', () =>
  expect(checkPartialRanges(['10-20', '11-30'])).toBeTruthy());
test('no overlap', () =>
  expect(checkPartialRanges(['10-20', '21-30'])).toBeFalsy());

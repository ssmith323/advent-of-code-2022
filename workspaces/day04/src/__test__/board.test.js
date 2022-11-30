const Board = require('../board.js');

const hW = Array(5)
  .fill()
  .map(() => 'X');
const random = Array(5)
  .fill()
  .map(() => Math.floor(Math.random() * 99));

const verticalWin = [
  ['X', 1, 1, 1, 1],
  ['X', 1, 1, 1, 1],
  ['X', 1, 1, 1, 1],
  ['X', 1, 1, 1, 1],
  ['X', 1, 1, 1, 1],
];

const loss = [
  ['X', 1, 1, 1, 1],
  ['X', 1, 1, 1, 1],
  ['X', 1, 1, 1, 1],
  ['X', 1, 1, 1, 1],
  ['1', 1, 1, 1, 1],
];

test('a horizontal win first row', () => {
  const board = new Board([hW, random, random, random, random]);
  expect(board.checkWin()).toBe(true);
});

test('a horizontal win second row', () => {
  const board = new Board([random, hW, random, random, random]);
  expect(board.checkWin()).toBe(true);
});

test('a vertical win', () => {
  const board = new Board(verticalWin);
  expect(board.checkWin()).toBe(true);
});

test('a loss win', () => {
  const board = new Board(loss);
  expect(board.checkWin()).toBe(false);
});

test('a board value win', () => {
  const board = new Board(verticalWin);
  expect(board.getValueOfUnmarked()).toEqual(20);
});

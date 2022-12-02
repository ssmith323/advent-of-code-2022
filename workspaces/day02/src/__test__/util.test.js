const { play } = require('../util.js');
const { OUTCOME, THROWS } = require('../constant.js');

it('should have rock tie rock', () =>
  expect(play(THROWS.ROCK, THROWS.ROCK)).toBe(OUTCOME.DRAW));
it('should have paper beat paper', () =>
  expect(play(THROWS.PAPER, THROWS.PAPER)).toBe(OUTCOME.DRAW));
it('should have scissors tie scissors', () =>
  expect(play(THROWS.SCISSORS, THROWS.SCISSORS)).toBe(OUTCOME.DRAW));
it('should have rock beat scissors', () =>
  expect(play(THROWS.ROCK, THROWS.SCISSORS)).toBe(OUTCOME.WIN));
it('should have rock loses to paper', () =>
  expect(play(THROWS.ROCK, THROWS.PAPER)).toBe(OUTCOME.LOST));
it('should have paper loses scissors', () =>
  expect(play(THROWS.PAPER, THROWS.SCISSORS)).toBe(OUTCOME.LOST));
it('should have paper beat rock', () =>
  expect(play(THROWS.PAPER, THROWS.ROCK)).toBe(OUTCOME.WIN));
it('should have scissors beat paper', () =>
  expect(play(THROWS.SCISSORS, THROWS.PAPER)).toBe(OUTCOME.WIN));
it('should have scissors loses rock', () =>
  expect(play(THROWS.SCISSORS, THROWS.ROCK)).toBe(OUTCOME.LOST));

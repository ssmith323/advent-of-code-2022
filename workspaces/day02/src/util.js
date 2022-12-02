const {
  OUTCOME,
  TO_WINNING,
  TO_LOSING,
  POINTS,
  THROWS,
} = require('./constant.js');

const play = (playerMove, opponentMove) => {
  if (opponentMove === playerMove) {
    return OUTCOME.DRAW;
  }

  if (
    (playerMove === THROWS.ROCK && opponentMove === THROWS.SCISSORS) ||
    (playerMove === THROWS.PAPER && opponentMove === THROWS.ROCK) ||
    (playerMove === THROWS.SCISSORS && opponentMove === THROWS.PAPER)
  ) {
    return OUTCOME.WIN;
  }
  return OUTCOME.LOST;
};

const getYourThrow = (neededResult, opponentMove) => {
  if (neededResult === 'X') {
    return TO_LOSING[opponentMove];
  } else if (neededResult === 'Y') {
    return POINTS[opponentMove];
  }
  return TO_WINNING[opponentMove];
};

module.exports = { getYourThrow, play, POINTS };

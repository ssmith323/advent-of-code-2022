const { OUTCOME, TO_WINNING, TO_LOSING, POINTS } = require('./constant.js');

const play = (playerMove, opponentMove) => {
  const outcome = Math.abs(playerMove - opponentMove - 2) % 3;
  switch (outcome) {
    case 2:
      return OUTCOME.DRAW;
    case 1:
      return OUTCOME.WIN;
    default:
      return OUTCOME.LOST;
  }
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

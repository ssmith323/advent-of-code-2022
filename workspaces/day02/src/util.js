const OUTCOME = {
  WIN: 6,
  DRAW: 3,
  LOST: 0,
};

const THROWS = {
  ROCK: 1,
  PAPER: 2,
  SCISSORS: 3,
};

const POINTS = {
  A: THROWS.ROCK,
  B: THROWS.PAPER,
  C: THROWS.SCISSORS,
  X: THROWS.ROCK,
  Y: THROWS.PAPER,
  Z: THROWS.SCISSORS,
};

const play = (playerMove, opponentMove) => {
  if (opponentMove === playerMove) {
    return OUTCOME.DRAW;
  } else if (
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
    return (
      (opponentMove === 'A' && 'C') ||
      (opponentMove === 'B' && 'A') ||
      (opponentMove === 'C' && 'B')
    );
  } else if (neededResult === 'Y') {
    return opponentMove;
  }
  return (
    (opponentMove === 'A' && 'B') ||
    (opponentMove === 'B' && 'C') ||
    (opponentMove === 'C' && 'A')
  );
};

module.exports = { getYourThrow, play, POINTS, THROWS };

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

const TO_LOSING = {
  A: POINTS.C,
  B: POINTS.A,
  C: POINTS.B,
};

const TO_WINNING = {
  A: POINTS.B,
  B: POINTS.C,
  C: POINTS.A,
};

module.exports = { OUTCOME, THROWS, POINTS, TO_LOSING, TO_WINNING };

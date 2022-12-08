const {
  checkUpWay,
  checkLeftWay,
  checkRightWay,
  checkDownWay,
} = require('../check.js');

let map;

beforeEach(() => {
  map = [
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
    [1, 1, 1, 1],
  ];
});

describe('checkUpWay', () => {
  test('should be true for up', () => {
    map[1][1] = 2;
    expect(checkUpWay(map, [1, 1])).toBeTruthy();
  });

  test('should be false for up since we have the same height', () => {
    map[1][1] = 2;
    map[2][1] = 2;
    expect(checkUpWay(map, [2, 1])).toBeFalsy();
  });

  test('should be false for up because it is higher', () => {
    map[1][1] = 3;
    map[2][1] = 2;
    expect(checkUpWay(map, [2, 1])).toBeFalsy();
  });
});

describe('checkLeftWay', () => {
  test('should be true for up', () => {
    map[1][1] = 2;
    expect(checkLeftWay(map, [1, 1])).toBeTruthy();
  });

  test('should be false for up since we have the same height', () => {
    map[1][1] = 2;
    map[1][2] = 2;
    expect(checkLeftWay(map, [1, 2])).toBeFalsy();
  });

  test('should be false for up because it is higher', () => {
    map[1][1] = 3;
    map[1][2] = 2;
    expect(checkLeftWay(map, [1, 2])).toBeFalsy();
  });
});

describe('checkRightWay', () => {
  test('should be true for up', () => {
    map[1][1] = 2;
    expect(checkRightWay(map, [1, 1])).toBeTruthy();
  });

  test('should be false for up since we have the same height', () => {
    map[1][1] = 2;
    map[1][2] = 2;
    expect(checkRightWay(map, [1, 1])).toBeFalsy();
  });

  test('should be false for up because it is higher', () => {
    map[1][2] = 2;
    map[1][3] = 3;
    expect(checkRightWay(map, [1, 2])).toBeFalsy();
  });
});

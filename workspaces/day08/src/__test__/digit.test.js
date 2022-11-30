const Digit = require('../digit.js');

test('should create 1', () => {
  const digit = new Digit(
    'acedgfb cdfbe gcdfa fbcad dab cefabd cdfgeb eafb cagedb ab'
  );
  expect(digit.regex[1]).toBe('ab');
  expect(digit.regex[2]).toBe('gcdfa');
  expect(digit.regex[3]).toBe('fbcad');
  expect(digit.regex[4]).toBe('eafb');
  expect(digit.regex[5]).toBe('cdfbe');
  expect(digit.regex[6]).toBe('cdfgeb');
  expect(digit.regex[7]).toBe('dab');
  expect(digit.regex[8]).toBe('acedgfb');
  expect(digit.regex[9]).toBe('cefabd');
  expect(digit.regex[0]).toBe('cagedb');
});

test('should create 2', () => {
  const digit = new Digit(
    'edbfga begcd cbg gc gcadebf fbgde acbgfd abcde gfcbed gfec'
  );
  expect(digit.regex[1]).toBe('gc');
  expect(digit.regex[2]).toBe('abcde');
  expect(digit.regex[3]).toBe('begcd');
  expect(digit.regex[4]).toBe('gfec');
  expect(digit.regex[5]).toBe('fbgde');
  expect(digit.regex[6]).toBe('edbfga');
  expect(digit.regex[7]).toBe('cbg');
  expect(digit.regex[8]).toBe('gcadebf');
  expect(digit.regex[9]).toBe('gfcbed');
  expect(digit.regex[0]).toBe('acbgfd');
});

test('should create 3', () => {
  const digit = new Digit(
    'be cfbegad cbdgef fgaecd cgeb fdcge agebfd fecdb fabcd edb'
  );
  expect(digit.regex[1]).toBe('be');
  expect(digit.regex[2]).toBe('fabcd');
  expect(digit.regex[3]).toBe('fecdb');
  expect(digit.regex[4]).toBe('cgeb');
  expect(digit.regex[5]).toBe('fdcge');
  expect(digit.regex[6]).toBe('fgaecd');
  expect(digit.regex[7]).toBe('edb');
  expect(digit.regex[8]).toBe('cfbegad');
  expect(digit.regex[9]).toBe('cbdgef');
  expect(digit.regex[0]).toBe('agebfd');
});

const { part1 } = require('../part1.js');

test('test file', () => expect(part1('test.txt')).toBe(10));
test('test2 file', () => expect(part1('test2.txt')).toBe(19));
test('test3 file', () => expect(part1('test3.txt')).toBe(226));
test('input file', () => expect(part1('input.txt')).toBe(5958));

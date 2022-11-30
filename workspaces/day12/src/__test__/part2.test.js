const { part2 } = require('../part2.js');

test('test file', () => expect(part2('test.txt')).toBe(36));
test('test2 file', () => expect(part2('test2.txt')).toBe(103));
test('test3 file', () => expect(part2('test3.txt')).toBe(3509));
test('input file', () => expect(part2('input.txt')).toBe(150426));

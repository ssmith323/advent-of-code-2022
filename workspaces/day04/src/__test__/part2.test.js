const { part2 } = require('../part2.js');

test('test file', () => expect(part2('test.txt')).toBe(1924));
test('input file', () => expect(part2('input.txt')).toBe(17408));

const { part2 } = require('../part2.js');

test('test file', () => expect(part2('test.txt')).toBe(26984457539));
test('input file', () => expect(part2('input.txt')).toBe(1592918715629));

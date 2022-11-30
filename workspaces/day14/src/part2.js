/* eslint-disable max-lines */
/* eslint-disable complexity */
/* eslint-disable max-lines-per-function */
const { getCommands } = require('@util/file.js');
require('@util/array.js');
const part2 = (name) => {
  const commands = getCommands(name);
  const template = commands[0].split('');
  const rulesRaw = commands
    .filter((s) => s.includes('->'))
    .map((s) => s.split(' -> '));
  const rules = new Map(rulesRaw);
  let pairs = new Map();
  for (let i = 0; i < template.length - 1; i++) {
    const a = template[i];
    const b = template[i + 1];
    pairs.set(a + b, (pairs.get(a + b) || 0) + 1);
  }

  for (let i = 1; i <= 40; i++) {
    const newPairs = new Map();
    for (const [pair, count] of pairs) {
      const inter = rules.get(pair);
      const a = pair[0] + inter;
      const b = inter + pair[1];
      newPairs.set(a, count + (newPairs.get(a) || 0));
      newPairs.set(b, count + (newPairs.get(b) || 0));
    }
    pairs = newPairs;
  }

  const counts = new Map();
  for (const [pair, count] of pairs) {
    counts.set(pair[0], count + (counts.get(pair[0]) || 0));
    counts.set(pair[1], count + (counts.get(pair[1]) || 0));
  }
  counts.set(template[0], counts.get(template[0]) + 1);
  counts.set(
    template[template.length - 1],
    counts.get(template[template.length - 1]) + 1
  );
  const values = Array.from(counts.values()).map((n) => n / 2);
  return values.max() - values.min();
};

module.exports = { part2 };

const processRucksack = (rucksack) => {
  const half = rucksack.length / 2;
  const firstCompartment = rucksack.slice(0, half);
  const secondCompartment = rucksack.slice(half);
  const common = firstCompartment
    .split('')
    .filter((c) => secondCompartment.includes(c));
  return common[0];
};

const processGroupRucksack = (rucksacks) => {
  const [first, second, third] = rucksacks.split('\n');
  const common = first
    .split('')
    .filter((c) => second.includes(c) && third.includes(c));
  return common[0];
};

module.exports = { processGroupRucksack, processRucksack };

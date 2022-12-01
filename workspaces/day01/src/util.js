const getCalForElves = (input) => {
  const elves = [];
  let cal = 0;
  [...input, ''].forEach((i) => {
    if (i === '') {
      elves.push(cal);
      cal = 0;
    } else {
      cal += parseInt(i, 10);
    }
  });
  return elves;
};

module.exports = { getCalForElves };

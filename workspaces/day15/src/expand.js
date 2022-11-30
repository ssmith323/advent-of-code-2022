const increase = (x) => (x === 9 ? 1 : ++x);

const expandX = (inputMap) => {
  const res = [];
  for (const r of inputMap) {
    const x2 = r.map(increase);
    const x3 = x2.map(increase);
    const x4 = x3.map(increase);
    const x5 = x4.map(increase);
    res.push([...r, ...x2, ...x3, ...x4, ...x5]);
  }
  return res;
};

const expandY = (inputMap) => {
  const res = [];
  res.push(...inputMap);
  let c = [];
  c.push(...inputMap);
  for (let x = 1; x < 5; x++) {
    c = c.map((x) => x.map((n) => increase(n)));
    res.push(...c);
  }
  return res;
};

const expand = (grid) => expandY(expandX(grid));

module.exports = expand;

const getRange = (arr) => arr.split('-').map(Number);

const checkRanges = ([one, two]) => {
  const [oneFirst, oneSecond] = getRange(one);
  const [twoFirst, twoSecond] = getRange(two);
  return (
    (oneSecond >= twoSecond && oneFirst <= twoFirst) ||
    (oneSecond <= twoSecond && oneFirst >= twoFirst)
  );
};

const checkPartialRanges = ([one, two]) => {
  const [oneFirst, oneSecond] = getRange(one);
  const [twoFirst, twoSecond] = getRange(two);
  return (
    (oneFirst <= twoFirst && oneSecond >= twoFirst) ||
    (twoFirst <= oneFirst && twoSecond >= oneFirst)
  );
};

module.exports = { checkRanges, checkPartialRanges };

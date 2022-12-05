const getNumberOfContainers = (arr) =>
  arr[arr.length - 1].split(' ').filter((x) => x !== '').length;

const getEmptyMap = (num) =>
  Array(num)
    .fill()
    .map(() => []);

const fillMap = (numContainers, arr) => {
  const map = getEmptyMap(numContainers);
  for (let i = 0; i < arr.length - 1; i++) {
    const x = arr[i];
    let stack = 0;
    for (let j = 1; j < x.length; j += 4) {
      if (x.charAt(j) !== ' ') {
        map[stack].unshift(x.charAt(j));
      }
      stack++;
    }
  }
  return map;
};

const parseCommands = (str) =>
  str
    .split('\n')
    .map((line) => line.split(' '))
    .map((arr) => ({
      move: arr[1],
      start: arr[3],
      end: arr[5],
    }));

const parseMap = (str) => {
  const arr = str.split('\n');
  const numContainers = getNumberOfContainers(arr);
  return fillMap(numContainers, arr);
};

module.exports = { parseMap, parseCommands };

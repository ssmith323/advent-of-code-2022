/* eslint-disable max-lines */
/* eslint-disable max-lines-per-function */
const Cave = require('./cave.js');

const sortByName = (a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  return 0;
};

const isValidPath = (path, smallCaveVisits) => {
  let duplicates = 0;
  const sortedPath = path
    .filter((a) => !a.isBig && a.name !== 'start' && a.name !== 'end')
    .sort(sortByName);
  if (sortedPath.length <= smallCaveVisits) {
    return true;
  }
  for (let i = 1; i < sortedPath.length; i++) {
    sortedPath[i - 1].name === sortedPath[i].name && ++duplicates;
  }
  return duplicates < smallCaveVisits;
};

module.exports = class CaveMap {
  constructor(arr) {
    this.caves = {};
    arr.forEach((r) => {
      const caves = r.split('-');
      if (typeof this.caves[caves[0]] === 'undefined') {
        this.caves = { ...this.caves, [caves[0]]: new Cave(caves[0]) };
      }
      if (typeof this.caves[caves[1]] === 'undefined') {
        this.caves = { ...this.caves, [caves[1]]: new Cave(caves[1]) };
      }
      this.caves[caves[0]].addConnector(caves[1]);
      this.caves[caves[1]].addConnector(caves[0]);
    });
  }

  traverse(smallCaveVisits = 1) {
    const paths = [];
    const toExplore = [[this.caves.start]];

    while (toExplore.length > 0) {
      const currentPath = toExplore.pop();
      const currLastPlace = currentPath.at(-1);
      if (currLastPlace.name === 'end') {
        paths.push(currentPath);
        continue;
      }
      const connectedCaves = currLastPlace.connected;

      connectedCaves.forEach((neighbour) => {
        const neigh = this.caves[neighbour];
        if (neigh.name !== 'start') {
          const possiblePath = [...currentPath, neigh];
          if (isValidPath(possiblePath, smallCaveVisits)) {
            toExplore.push(possiblePath);
          }
        }
      });
    }
    return paths;
  }
};

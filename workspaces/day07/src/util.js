const handleCd = (pwd, dir) => {
  if (dir === '..') {
    pwd.pop();
  } else {
    pwd.push(dir);
  }
};

const handleFile = ([pwd, sizes], size) => {
  for (let i = 1; i <= pwd.length; i++) {
    sizes[pwd.slice(0, i).join('/')] += parseInt(size, 10);
  }
};

const handleDir = ([pwd, sizes], dirName) => {
  const path = [...pwd, dirName].join('/');
  return { ...sizes, [path]: 0 };
};

// eslint-disable-next-line max-lines-per-function
const parseInput = (arr) => {
  const pwd = [];
  let sizes = { '/': 0 };
  arr.forEach((a) => {
    const line = a.split(' ');
    if (line[0] === '$') {
      if (line[1] === 'cd') {
        handleCd(pwd, line[2]);
      }
    } else if (line[0] === 'dir') {
      sizes = handleDir([pwd, sizes], line[1]);
    } else {
      handleFile([pwd, sizes], line[0]);
    }
  });
  return sizes;
};

module.exports = { parseInput };

const parseInput = (arr) => {
  const pwd = [];
  let sizes = { '/': 0 };
  arr.forEach((a) => {
    const line = a.split(' ');
    if (line[0] === '$') {
      switch (line[1]) {
        case 'cd':
          if (line[2] === '..') {
            pwd.pop();
          } else {
            pwd.push(line[2]);
          }
      }
    } else if (line[0] === 'dir') {
      const path = [...pwd, line[1]].join('/');
      sizes = { ...sizes, [path]: 0 };
    } else {
      for (let i = 1; i < pwd.length; i++) {
        sizes[pwd.slice(0, i).join('/')] += parseInt(line[0], 10);
      }
      sizes[pwd.join('/')] += parseInt(line[0], 10);
    }
  });
  return sizes;
};

module.exports = { parseInput };

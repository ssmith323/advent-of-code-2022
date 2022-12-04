const { execSync } = require('child_process');
const { writeFileSync } = require('fs');
const output = {
  meta: {
    today: new Date().toISOString(),
  },
  days: {},
};

const getSeconds = (start, end) => `${(end - start) / 1000} seconds`;

const getTestResults = (result) => {
  const arr = result.split('|').slice(15);
  let retValue = {};
  for (let i = 0; i < arr.length; i += 5) {
    const filename = arr[i].split('\n')[1].trim();
    if (filename !== '' && !filename.includes('--')) {
      retValue = {
        ...retValue,
        [filename]: {
          statement: parseInt(arr[i + 1]),
          branch: parseInt(arr[i + 2]),
          functions: parseInt(arr[i + 3]),
          lines: parseInt(arr[i + 4]),
        },
      };
    }
  }
  return retValue;
};
const todayDate = new Date().getDate();
const runUntil = todayDate < 26 ? todayDate : 25;
for (let i = 1; i <= runUntil; i++) {
  const day = i > 10 ? i : `0${i}`;
  const start1 = Date.now();
  execSync(`npm run part1 -w w*/d*${day}`);
  const end1 = Date.now();
  const start2 = Date.now();
  execSync(`npm run part2 -w w*/*${day}`);
  const end2 = Date.now();

  const result = execSync(`npm run test:ci -w w*/*${day}`).toString();

  output.days[i] = {
    part1: getSeconds(start1, end1),
    part2: getSeconds(start2, end2),
    tests: getTestResults(result),
  };
}

writeFileSync('web/output.json', JSON.stringify(output));
execSync('npm run format');

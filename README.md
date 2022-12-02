# [Advent of Code 2022](https://adventofcode.com/2022)

[![Tests](https://github.com/ssmith323/advent-of-code-2022/actions/workflows/test.yml/badge.svg)](https://github.com/ssmith323/advent-of-code-2022/actions/workflows/test.yml)
[![Lint](https://github.com/ssmith323/advent-of-code-2022/actions/workflows/lint.yml/badge.svg)](https://github.com/ssmith323/advent-of-code-2022/actions/workflows/lint.yml)

## Days

[![Day](https://badgen.net/badge/01/%E2%98%85%E2%98%85/green)](workspaces/day01)
[![Day](https://badgen.net/badge/02/%E2%98%85%E2%98%85/green)](workspaces/day02)
[![Day](https://badgen.net/badge/03/%E2%98%86%E2%98%86/gray)](workspaces/day03)
[![Day](https://badgen.net/badge/04/%E2%98%86%E2%98%86/gray)](workspaces/day04)
[![Day](https://badgen.net/badge/05/%E2%98%86%E2%98%86/gray)](workspaces/day05)
[![Day](https://badgen.net/badge/06/%E2%98%86%E2%98%86/gray)](workspaces/day06)
[![Day](https://badgen.net/badge/07/%E2%98%86%E2%98%86/gray)](workspaces/day07)
[![Day](https://badgen.net/badge/08/%E2%98%86%E2%98%86/gray)](workspaces/day08)
[![Day](https://badgen.net/badge/09/%E2%98%86%E2%98%86/gray)](workspaces/day09)
[![Day](https://badgen.net/badge/10/%E2%98%86%E2%98%86/gray)](workspaces/day10)
[![Day](https://badgen.net/badge/11/%E2%98%86%E2%98%86/gray)](workspaces/day11)
[![Day](https://badgen.net/badge/12/%E2%98%86%E2%98%86/gray)](workspaces/day12)
[![Day](https://badgen.net/badge/13/%E2%98%86%E2%98%86/gray)](workspaces/day13)
[![Day](https://badgen.net/badge/14/%E2%98%86%E2%98%86/gray)](workspaces/day14)
[![Day](https://badgen.net/badge/15/%E2%98%86%E2%98%86/gray)](workspaces/day15)
[![Day](https://badgen.net/badge/16/%E2%98%86%E2%98%86/gray)](workspaces/day16)
[![Day](https://badgen.net/badge/17/%E2%98%86%E2%98%86/gray)](workspaces/day17)
[![Day](https://badgen.net/badge/18/%E2%98%86%E2%98%86/gray)](workspaces/day18)
[![Day](https://badgen.net/badge/19/%E2%98%86%E2%98%86/gray)](workspaces/day19)
[![Day](https://badgen.net/badge/20/%E2%98%86%E2%98%86/gray)](workspaces/day20)
[![Day](https://badgen.net/badge/21/%E2%98%86%E2%98%86/gray)](workspaces/day21)
[![Day](https://badgen.net/badge/22/%E2%98%86%E2%98%86/gray)](workspaces/day22)
[![Day](https://badgen.net/badge/23/%E2%98%86%E2%98%86/gray)](workspaces/day23)
[![Day](https://badgen.net/badge/24/%E2%98%86%E2%98%86/gray)](workspaces/day24)
[![Day](https://badgen.net/badge/25/%E2%98%86%E2%98%86/gray)](workspaces/day25)

## Dependencies

* [jest](#jest)
* [eslint](#eslint)
* [prettier](#prettier)

### Jest

Used for testing each part indivuidally. No unittesting is being done here.
https://jestjs.io/

### Eslint

This is making sure all code is fully very strict standards.
https://eslint.org/

### Prettier

Keep the code formating correctly.
https://prettier.io/

### Root Tasks

* lint
    * Lint the whole project
* start
    * Creates a file with timing on the different solutions

`npm run {task}`

### Workspaces

Ever workspaces has the same 3 tasks.

* `test`
    * Will run all test for the workspace
* `part1`
    * Will run only part one of the day
* `part2`
    * Will run only part two of the day

You can run this by doing `npm run {task} -w w*/*{day}`

## Description

This is for 2022 Advent of code. This is done using Vanilla JS. All dependencies being used is for code quality and
testing. 


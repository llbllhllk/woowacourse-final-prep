const lotto = Object.freeze({
  min: 1,
  max: 45,
  length: 6,
  separator: ',',
});

const matchResult = [0, 0, 0, 0, 0, 0];
const prize = [5000, 50000, 1500000, 30000000, 2000000000];

const profit = Object.freeze({
  percentage: 100,
});

const purchase = Object.freeze({
  unit: 1000,
});

const matchCount = Object.freeze({
  three: 3,
  four: 4,
  five: 5,
  bonus: 6,
});

const rounding = Object.freeze({
  secondRound: 1,
});

const matchIndex = Object.freeze({
  three: 0,
  four: 1,
  five: 2,
  bonus: 3,
  six: 4,
  default: -1,
});

const index = Object.freeze({
  next: 1,
});

const number = Object.freeze({
  zero: 0,
});

const string = Object.freeze({
  separator: ', ',
});

const CONSTANTS = Object.freeze({
  string,
  number,
  prize,
  matchResult,
  index,
  lotto,
  matchCount,
  matchIndex,
  profit,
  rounding,
  purchase,
});

export default CONSTANTS;

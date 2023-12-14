const categories = Object.freeze({
  list: ['일식', '한식', '중식', '아시안', '양식'],
  length: 5,
  maxRange: 2,
  separator: ', ',
});

const random = Object.freeze({
  from: 1,
  to: 5,
  numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9],
});

const coach = Object.freeze({
  nameMinLength: 2,
  nameMaxLength: 4,
  minCount: 2,
  maxCount: 5,
});

const string = Object.freeze({
  separator: ',',
});

const index = Object.freeze({
  first: 0,
});

const CONSTANTS = Object.freeze({
  categories,
  coach,
  random,
  string,
  index,
});

export default CONSTANTS;

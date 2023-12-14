const categories = Object.freeze({
  list: ['일식', '한식', '중식', '아시안', '양식'],
  length: 5,
  maxRange: 2,
});

const random = Object.freeze({
  from: 1,
  to: 5,
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

const CONSTANTS = Object.freeze({
  categories,
  coach,
  random,
  string,
});

export default CONSTANTS;

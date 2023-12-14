const categories = Object.freeze({
  list: ['일식', '한식', '중식', '아시안', '양식'],
  length: 5,
  maxRange: 2,
});

const random = Object.freeze({
  from: 1,
  to: 5,
});

const CONSTANTS = Object.freeze({
  categories,
  random,
});

export default CONSTANTS;

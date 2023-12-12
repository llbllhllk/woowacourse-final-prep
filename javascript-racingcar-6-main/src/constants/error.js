const attempts = Object.freeze({
  isNaN: '[ERROR] 숫자가 아닙니다.',
});

const carNames = Object.freeze({
  length: '[ERROR] 자동차 이름은 5자 이하여야합니다.',
});

const ERROR = Object.freeze({ attempts, carNames });

export default ERROR;

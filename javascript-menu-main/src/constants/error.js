const coachName = Object.freeze({
  length: '[ERROR] 코치 이름은 최소 2글자, 최대 4글자여야합니다.',
  range: '[ERROR] 최소 2명, 최대 5명의 코치가 있어야합니다.',
});

const ERROR = Object.freeze({
  coachName,
});

export default ERROR;

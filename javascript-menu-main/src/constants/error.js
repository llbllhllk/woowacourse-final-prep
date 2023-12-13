const coachName = Object.freeze({
  length: '[ERROR] 코치의 이름은 최소 2글자, 최대 4글자이어야 합니다.',
  count: '[ERROR] 코치는 최소 2명, 최대 5명까지 식사해야합니다.',
});

const unwantedMenu = Object.freeze({
  range: '[ERROR] 각 코치는 최소 0개, 최대 2개의 못 먹는 메뉴가 있어야합니다.',
});

const ERROR = Object.freeze({
  coachName,
  unwantedMenu,
});

export default ERROR;

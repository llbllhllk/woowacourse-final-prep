const bonusNumber = Object.freeze({
  range: '[ERROR] 1~45의 정수값을 가져야합니다.',
});

const lotto = Object.freeze({
  length: '[ERROR] 로또 번호는 6개여야 합니다.',
  range: '[ERROR] 로또 번호는 1~45의 숫자 범위를 가집니다.',
  duplicated: '[ERROR] 로또 번호가 중복되었습니다.',
});

const purchase = Object.freeze({
  unit: '[ERROR] 구입금액은 1,000 단위여야합니다.',
});

const winningNumbers = Object.freeze({
  length: '[ERROR] 당첨 번호는 6개 이어야한다.',
  range: '[ERROR] 1~45의 정수값을 가져야합니다.',
});

const ERROR = Object.freeze({
  bonusNumber,
  lotto,
  purchase,
  winningNumbers,
});

export default ERROR;

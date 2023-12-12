const read = Object.freeze({
  carNames: '경주할 자동차 이름을 입력하세요.(이름은 쉼표(,) 기준으로 구분)\n',
  attempts: '시도할 횟수는 몇 회인가요?\n',
});

const print = Object.freeze({
  resultHeader: '\n실행 결과',
});

const MESSAGE = Object.freeze({ read, print });

export default MESSAGE;

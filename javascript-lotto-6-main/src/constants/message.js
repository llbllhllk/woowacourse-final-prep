const read = Object.freeze({
  purchase: '구입금액을 입력해 주세요.\n',
  winningNumbers: '\n당첨 번호를 입력해 주세요.\n',
  bonusNumber: '\n보너스 번호를 입력해 주세요.\n',
});

const print = Object.freeze({
  resultHeader: '\n당첨 통계\n---',
});

const match = Object.freeze({
  three: '3개 일치 (5,000원) - ',
  four: '4개 일치 (50,000원) - ',
  five: '5개 일치 (1,500,000원) - ',
  bonus: '5개 일치, 보너스 볼 일치 (30,000,000원) - ',
  six: '6개 일치 (2,000,000,000원) - ',
});

const MESSAGE = Object.freeze({ read, print, match });

export default MESSAGE;

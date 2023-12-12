import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readPurchase() {
    const amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

    return amount;
  },

  async readWinningNumbers() {
    const winningNumbers = await Console.readLineAsync('\n당첨 번호를 입력해 주세요.\n');

    return winningNumbers;
  },

  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync('\n보너스 번호를 입력해 주세요.\n');

    return bonusNumber;
  },
};

export default InputView;

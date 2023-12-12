import { Console } from '@woowacourse/mission-utils';
import reTry from '../utils/reTry.js';

const InputView = {
  async readPurchase() {
    return reTry(async () => {
      const amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

      return amount;
    });
  },

  async readWinningNumbers() {
    return reTry(async () => {
      const winningNumbers = await Console.readLineAsync('당첨 번호를 입력해 주세요.\n');

      return winningNumbers;
    });
  },
};

export default InputView;

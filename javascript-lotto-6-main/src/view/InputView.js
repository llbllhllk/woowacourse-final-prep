import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const InputView = {
  async readPurchase() {
    const amount = await Console.readLineAsync(MESSAGE.read.purchase);

    return amount;
  },

  async readWinningNumbers() {
    const winningNumbers = await Console.readLineAsync(MESSAGE.read.winningNumbers);

    return winningNumbers;
  },

  async readBonusNumber() {
    const bonusNumber = await Console.readLineAsync(MESSAGE.read.bonusNumber);

    return bonusNumber;
  },
};

export default InputView;

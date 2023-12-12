import { Console } from '@woowacourse/mission-utils';
import reTry from '../utils/reTry.js';

const InputView = {
  async readPurchase() {
    return reTry(async () => {
      const amount = await Console.readLineAsync('구입금액을 입력해 주세요.\n');

      return amount;
    });
  },
};

export default InputView;

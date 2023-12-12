import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const InputView = {
  async readCarNames() {
    const carNames = await Console.readLineAsync(MESSAGE.read.carNames);

    return carNames;
  },

  async readAttempts() {
    const attempts = await Console.readLineAsync(MESSAGE.read.attempts);

    return attempts;
  },
};

export default InputView;

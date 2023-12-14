import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async read() {
    const returnValue = await Console.readLineAsync();

    return returnValue;
  },
};

export default InputView;
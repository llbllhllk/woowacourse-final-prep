import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async read() {
    return await Console.readLineAsync();
  },
};

export default InputView;

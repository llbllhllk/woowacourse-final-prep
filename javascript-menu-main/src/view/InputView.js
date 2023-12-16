import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readCoachNames() {
    return await Console.readLineAsync('코치의 이름을 입력해 주세요. (, 로 구분)\n');
  },
};

export default InputView;

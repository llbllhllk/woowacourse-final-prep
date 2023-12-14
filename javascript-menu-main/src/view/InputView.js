import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readCoachName() {
    const coachName = await Console.readLineAsync('코치의 이름을 입력해 주세요. (, 로 구분)\n');

    return coachName;
  },
};

export default InputView;

import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readCoachNames() {
    return await Console.readLineAsync('코치의 이름을 입력해 주세요. (, 로 구분)\n');
  },

  async readUnwantedMenus(name) {
    return await Console.readLineAsync(`\n${name}(이)가 못 먹는 메뉴를 입력해 주세요.`);
  },
};

export default InputView;

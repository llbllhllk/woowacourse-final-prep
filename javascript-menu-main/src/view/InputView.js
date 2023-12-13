import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async readCoachName() {
    const coachName = await Console.readLineAsync('코치의 이름을 입력해 주세요. (, 로 구분)\n');

    return coachName;
  },

  async readUnwantedMenu(name) {
    const unwantedMenu = await Console.readLineAsync(
      `\n${name}(이)가 못 먹는 메뉴를 입력해 주세요.\n`,
    );

    return unwantedMenu;
  },
};

export default InputView;

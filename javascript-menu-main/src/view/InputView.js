import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const InputView = {
  async readCoachName() {
    const coachName = await Console.readLineAsync(MESSAGE.read.coachName);

    return coachName;
  },

  async readUnwantedMenu(name) {
    const unwantedMenu = await Console.readLineAsync(`\n${name}${MESSAGE.read.unwantedMenu}`);

    return unwantedMenu;
  },
};

export default InputView;

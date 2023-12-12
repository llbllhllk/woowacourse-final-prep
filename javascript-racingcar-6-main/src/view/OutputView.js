import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import CONSTANTS from '../constants/constants.js';

const OutputView = {
  printResultHeaderString() {
    Console.print(MESSAGE.print.resultHeader);
  },

  printStatusString(statusString) {
    statusString.forEach(status => Console.print(status));
    Console.print(CONSTANTS.string.empty);
  },

  printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(CONSTANTS.winners.separator)}`);
  },
};

export default OutputView;

import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printResultHeaderString() {
    Console.print('\n실행 결과');
  },

  printStatusString(statusString) {
    statusString.forEach(status => Console.print(status));
    Console.print('');
  },

  printWinners(winners) {
    Console.print(`최종 우승자 : ${winners.join(', ')}`);
  },
};

export default OutputView;

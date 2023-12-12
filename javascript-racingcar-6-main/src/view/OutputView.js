import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printResultHeaderString() {
    Console.print('\n실행 결과');
  },

  printStatusString(statusString) {
    statusString.forEach(status => Console.print(status));
    Console.print('');
  },
};

export default OutputView;

import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printString() {
    Console.print();
  },

  printResultHeader() {
    Console.print('\n당첨 통계\n---');
  },
};

export default OutputView;

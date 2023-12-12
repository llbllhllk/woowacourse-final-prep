import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printString() {
    Console.print();
  },

  printResultHeader() {
    Console.print('\n당첨 통계\n---');
  },

  printNumberOfPurchase(numberOfPurchase) {
    Console.print(`${numberOfPurchase}개를 구매했습니다.`);
  },

  printLottosString(lottosString) {
    lottosString.forEach(lottoString => Console.print(lottoString));
  },

  printResult() {
    
  }
};

export default OutputView;

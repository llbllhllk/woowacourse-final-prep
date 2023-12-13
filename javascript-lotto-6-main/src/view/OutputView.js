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

  printResult(matchResult) {
    Console.print(`3개 일치 (5,000원) - ${matchResult[1]}개`);
    Console.print(`4개 일치 (50,000원) - ${matchResult[2]}개`);
    Console.print(`5개 일치 (1,500,000원) - ${matchResult[3]}개`);
    Console.print(`5개 일치, 보너스 볼 일치 (30,000,000원) - ${matchResult[4]}개`);
    Console.print(`6개 일치 (2,000,000,000원) - ${matchResult[5]}개`);
  },

  printProfit(profit) {
    Console.print(`총 수익률은 ${profit}%입니다.`);
  },
};

export default OutputView;

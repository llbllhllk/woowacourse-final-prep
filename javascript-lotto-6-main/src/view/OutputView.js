import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const OutputView = {
  printString() {
    Console.print();
  },

  printResultHeader() {
    Console.print(MESSAGE.print.resultHeader);
  },

  printNumberOfPurchase(numberOfPurchase) {
    Console.print(`${numberOfPurchase}개를 구매했습니다.`);
  },

  printLottosString(lottosString) {
    lottosString.forEach(lottoString => Console.print(lottoString));
  },

  printResult(matchResult) {
    Console.print(`${MESSAGE.match.three}${matchResult[1]}개`);
    Console.print(`${MESSAGE.match.four}${matchResult[2]}개`);
    Console.print(`${MESSAGE.match.five}${matchResult[3]}개`);
    Console.print(`${MESSAGE.match.bonus}${matchResult[4]}개`);
    Console.print(`${MESSAGE.match.six}${matchResult[5]}개`);
  },

  printProfit(profit) {
    Console.print(`총 수익률은 ${profit}%입니다.`);
  },
};

export default OutputView;

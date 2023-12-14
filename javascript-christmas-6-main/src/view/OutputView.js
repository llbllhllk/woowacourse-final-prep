import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printString() {
    Console.print();
  },

  printGreetingString() {
    Console.print('안녕하세요! 우테코 식당 12월 이벤트 플래너입니다.');
  },

  printPreviewHeaderString() {
    Console.print('12월 3일에 우테코 식당에서 받을 이벤트 혜택 미리 보기!\n');
  },

  printOrderString(orderString) {
    Console.print('<주문 메뉴>');
    orderString.forEach(item => Console.print(item));
  },

  printbeforeDiscountAmountString(beforeDiscountAmount) {
    Console.print('\n<할인 전 총주문 금액>');
    Console.print(`${beforeDiscountAmount}원`);
  },
};

export default OutputView;

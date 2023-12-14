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

  printGiftMenuString(giftMenu) {
    Console.print(`\n<증정 메뉴>\n${giftMenu}`);
  },

  printDDayDiscountString(ddayDiscountString) {
    if (ddayDiscountString) Console.print(ddayDiscountString);
  },

  printWeekDayDiscountString(weekDayDiscountString) {
    if (weekDayDiscountString) Console.print(weekDayDiscountString);
  },

  printWeekendDiscountString(weekendDiscountString) {
    if (weekendDiscountString) Console.print(weekendDiscountString);
  },

  printSpecialDayDiscountString(specialDayDiscountString) {
    if (specialDayDiscountString) Console.print(specialDayDiscountString);
  },

  printGitftMenuDiscountString(giftMenuDiscountString) {
    if (giftMenuDiscountString) Console.print(giftMenuDiscountString);
  },

  printEmptyBenefitString(emptyBenefitString) {
    Console.print(emptyBenefitString);
  },

  printBenefitLogString(
    ddayDiscountString,
    weekDayDiscountString,
    weekendDiscountString,
    specialDayDiscountString,
    giftMenuDiscountString,
  ) {
    Console.print('\n<혜택 내역>');
    this.printDDayDiscountString(ddayDiscountString);
    this.printWeekendDiscountString(weekDayDiscountString);
    this.printWeekendDiscountString(weekendDiscountString);
    this.printSpecialDayDiscountString(specialDayDiscountString);
    this.printGitftMenuDiscountString(giftMenuDiscountString);
  },
};

export default OutputView;

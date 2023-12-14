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
};

export default OutputView;

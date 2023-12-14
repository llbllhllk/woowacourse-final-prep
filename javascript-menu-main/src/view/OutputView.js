import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printStartString() {
    Console.print('점심 메뉴 추천을 시작합니다.\n');
  },

  printResultHeaderString() {
    Console.print('메뉴 추천 결과입니다.');
  },
};

export default OutputView;

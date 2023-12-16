import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printStartString() {
    Console.print('점심 메뉴 추천을 시작합니다.\n');
  },

  printResultHeaderString() {
    Console.print('\n메뉴 추천 결과입니다.');
  },

  printWeekString() {
    Console.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
  },
};

export default OutputView;

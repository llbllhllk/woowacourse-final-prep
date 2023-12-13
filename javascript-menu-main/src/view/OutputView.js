import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printStartString() {
    Console.print('점심 메뉴 추천을 시작합니다.\n');
  },

  printEndString() {
    Console.print('\n추천을 완료했습니다.');
  },
};

export default OutputView;

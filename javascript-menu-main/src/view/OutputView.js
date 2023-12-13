import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printStartString() {
    Console.print('점심 메뉴 추천을 시작합니다.\n');
  },

  printEndString() {
    Console.print('\n추천을 완료했습니다.');
  },

  printResultHeaderString() {
    Console.print('\n메뉴 추천 결과입니다.');
  },

  printWeekString() {
    Console.print('[ 구분 | 월요일 | 화요일 | 수요일 | 목요일 | 금요일 ]');
  },

  printCategoryString(categories) {
    Console.print(`[ 카테고리 | ${categories.join(' | ')} ]`);
  },

  printRecommandMenus(recommandMenus) {
    recommandMenus.forEach(recommandMenu =>
      Console.print(`[ ${recommandMenu[0]} | ${recommandMenu[1].join(' | ')} ]`),
    );
  },

  printResultString(categories, recommandMenus) {
    this.printResultHeaderString();
    this.printWeekString();
    this.printCategoryString(categories);
    this.printRecommandMenus(recommandMenus);
  },
};

export default OutputView;

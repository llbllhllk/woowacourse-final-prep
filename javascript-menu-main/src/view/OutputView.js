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

  printEndString() {
    Console.print('\n추천을 완료했습니다.');
  },

  printCategoriesString(categories) {
    //[ 카테고리 | 한식 | 한식 | 일식 | 중식 | 아시안 ]
    Console.print(`[ 카테고리 | ${categories.join(' | ')} ]`);
  },

  printRecommandMenusString(recommandMenus) {
    // [ 포코 | 된장찌개 | 불고기 | 하이라이스 | 탕수육 | 나시고렝 ]
    recommandMenus.forEach(recommand =>
      Console.print(`[ ${recommand[0]} | ${recommand[1].join(' | ')} ]`),
    );
  },

  printResultString(recommandMenus, categories) {
    this.printResultHeaderString();
    this.printWeekString();
    this.printCategoriesString(categories);
    this.printRecommandMenusString(recommandMenus);
    this.printEndString()
  },
};

export default OutputView;

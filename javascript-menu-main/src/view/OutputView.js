import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import CONSTANTS from '../constants/constants.js';

const OutputView = {
  printStartString() {
    Console.print(MESSAGE.print.start);
  },

  printResultHeaderString() {
    Console.print(MESSAGE.print.resultHeader);
  },

  printWeekString() {
    Console.print(MESSAGE.print.week);
  },

  printEndString() {
    Console.print(MESSAGE.print.end);
  },

  printCategoriesString(categories) {
    Console.print(`[ 카테고리 | ${categories.join(MESSAGE.print.separator)} ]`);
  },

  printRecommandMenusString(recommandMenus) {
    recommandMenus.forEach(recommand =>
      Console.print(
        `[ ${recommand[CONSTANTS.recommand.name]} | ${recommand[CONSTANTS.recommand.menus].join(
          MESSAGE.print.separator,
        )} ]`,
      ),
    );
  },

  printResultString(recommandMenus, categories) {
    this.printResultHeaderString();
    this.printWeekString();
    this.printCategoriesString(categories);
    this.printRecommandMenusString(recommandMenus);
    this.printEndString();
  },
};

export default OutputView;

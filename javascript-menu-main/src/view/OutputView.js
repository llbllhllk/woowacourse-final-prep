import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import CONSTANTS from '../constants/constants.js';

const OutputView = {
  printStartString() {
    Console.print(MESSAGE.print.start);
  },

  printEndString() {
    Console.print(MESSAGE.print.end);
  },

  printResultHeaderString() {
    Console.print(MESSAGE.print.resultHeader);
  },

  printWeekString() {
    Console.print(MESSAGE.print.week);
  },

  printCategoryString(categories) {
    Console.print(`[ 카테고리 | ${categories.join(MESSAGE.separator)} ]`);
  },

  printRecommandMenus(recommandMenus) {
    recommandMenus.forEach(recommandMenu =>
      Console.print(
        `[ ${recommandMenu[CONSTANTS.recommandMenu.name]} | ${recommandMenu[
          CONSTANTS.recommandMenu.menus
        ].join(MESSAGE.separator)} ]`,
      ),
    );
  },

  printResultString(categories, recommandMenus) {
    this.printResultHeaderString();
    this.printWeekString();
    this.printCategoryString(categories);
    this.printRecommandMenus(recommandMenus);
    this.printEndString();
  },
};

export default OutputView;

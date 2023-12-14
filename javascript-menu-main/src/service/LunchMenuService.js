import { Random } from '@woowacourse/mission-utils';
import CoachName from '../domain/CoachName.js';
import UnwantedMenu from '../domain/UnwantedMenu.js';
import MENU from '../constants/menu.js';
import Categories from '../domain/Categories.js';

class LucnMenuService {
  #coachName;

  #unwantedMenu;

  constructor() {
    this.#unwantedMenu = [];
  }

  setCoachName(coachName) {
    this.#coachName = new CoachName(coachName).getFormattedCoachName();
  }

  getCoachName() {
    return this.#coachName;
  }

  setUnwantedMenu(unwantedMenu) {
    this.#unwantedMenu.push(new UnwantedMenu(unwantedMenu).getFormattedUnwantedMenu());
  }

  // Categories
  categories() {
    return new Categories().categories();
  }

  // RecommandMenu
  recommandMenus(randomCategories) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const recommandMenus = this.#coachName.map((name, index) => {
      // 현재 코치의 못먹는 메뉴
      const unwantedMenus = this.#unwantedMenu[index];

      // 카테고리별 5개 메뉴 추천
      const recommandMenu = [];
      randomCategories.forEach(category => {
        const categoryMenu = MENU.list[category].split(', ');

        let menu;
        do {
          const randomNumber = Random.shuffle(numbers)[0];
          menu = categoryMenu[randomNumber - 1];
        } while (
          unwantedMenus.some(unwantedMenu => unwantedMenu.includes(menu)) ||
          recommandMenu.includes(menu)
        );

        recommandMenu.push(menu);
      });

      return [name, recommandMenu];
    });

    return recommandMenus;
  }
}

export default LucnMenuService;

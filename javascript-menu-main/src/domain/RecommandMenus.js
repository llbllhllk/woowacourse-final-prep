import { Random } from '@woowacourse/mission-utils';
import MENU from '../constants/menu.js';

class RecommandMenus {
  #coachName;

  #unwantedMenu;

  constructor(coachName, unwantedMenu) {
    this.#coachName = coachName;
    this.#unwantedMenu = unwantedMenu;
  }

  recommandMenus(randomCategories) {
    const recommandMenus = this.#coachName.map((name, index) => {
      const unwantedMenus = this.#unwantedMenu[index];
      const recommandMenu = this.#getRecommandMenu(randomCategories, unwantedMenus);
      return [name, recommandMenu];
    });
    return recommandMenus;
  }

  #getRecommandMenu(randomCategories, unwantedMenus) {
    const recommandMenu = [];
    randomCategories.forEach(category => {
      const categoryMenu = MENU.list[category].split(', ');
      let menu;
      do {
        menu = this.#getRandomMenu(categoryMenu);
      } while (this.#shouldSkipMenu(menu, unwantedMenus, recommandMenu));
      recommandMenu.push(menu);
    });
    return recommandMenu;
  }

  #getRandomMenu(categoryMenu) {
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const randomNumber = Random.shuffle(numbers)[0];
    return categoryMenu[randomNumber - 1];
  }

  #shouldSkipMenu(menu, unwantedMenus, recommandMenu) {
    return (
      unwantedMenus.some(unwantedMenu => unwantedMenu.includes(menu)) ||
      recommandMenu.includes(menu)
    );
  }
}

export default RecommandMenus;

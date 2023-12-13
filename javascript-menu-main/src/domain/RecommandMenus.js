import { Random } from '@woowacourse/mission-utils';
import MENU from '../constants/menu.js';
import CATEGORY from '../constants/category.js';

class RecommandMenus {
  #coachName;

  #unwantedMenu;

  constructor(coachName, unwantedMenu) {
    this.#coachName = coachName;
    this.#unwantedMenu = unwantedMenu;
  }

  recommandMenus(categories) {
    const recommandInfo = this.#recommandInfo();
    return recommandInfo.map(([name, unwantedMenus]) => {
      return this.#generateRecommandMenusForCoach(name, unwantedMenus, categories);
    });
  }

  #generateRecommandMenusForCoach(name, unwantedMenus, categories) {
    const recommendedMenus = [];
    while (recommendedMenus.length < CATEGORY.length) {
      let randomMenu;
      categories.forEach(category => {
        randomMenu = this.#generateRecommandMenu(category);
        if (this.#isMenuValid(randomMenu, recommendedMenus, unwantedMenus)) {
          recommendedMenus.push(randomMenu);
        }
      });
    }
    return [name, recommendedMenus];
  }

  #generateRecommandMenu(category) {
    const numbers = Array.from({ length: MENU.length }, (_, index) => index + 1);
    const categoryMenu = MENU.list[category].split(MENU.separator);
    const randomIndex = Random.shuffle(numbers)[MENU.first] - 1;
    return categoryMenu[randomIndex];
  }

  #isMenuValid(menu, recommendedMenus, unwantedMenus) {
    return !recommendedMenus.includes(menu) && !unwantedMenus.includes(menu);
  }

  #recommandInfo() {
    return this.#coachName.map((name, index) => {
      const unwantedMenus = this.#unwantedMenu[index];
      return [name, unwantedMenus];
    });
  }
}

export default RecommandMenus;

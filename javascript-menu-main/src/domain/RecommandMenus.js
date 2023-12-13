import { Random } from '@woowacourse/mission-utils';
import MENU from '../constants/menu.js';

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
    while (recommendedMenus.length < 5) {
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
    const numbers = Array.from({ length: 9 }, (_, index) => index + 1);
    const categoryMenu = MENU.list[category].split(', ');
    const randomIndex = Random.shuffle(numbers)[0] - 1;
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

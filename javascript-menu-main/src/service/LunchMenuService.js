import { Random } from '@woowacourse/mission-utils';
import CoachName from '../domain/CoachName.js';
import UnwantedMenu from '../domain/UnwantedMenu.js';
import MENU from '../constants/menu.js';

class LunchMenuService {
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
  getRandomCategories() {
    const categories = ['일식', '한식', '중식', '아시안', '양식'];
    const randomCategories = [];
    while (randomCategories.length < 5) {
      this.#generateRandomCategory(randomCategories, categories);
    }
    return randomCategories;
  }

  #generateRandomCategory(randomCategories, categories) {
    const randomIndex = Random.pickNumberInRange(1, 5);
    const randomCategory = categories[randomIndex - 1];
    this.#checkRangeDuplicated(randomCategories, randomCategory);
  }

  #checkRangeDuplicated(randomCategories, randomCategory) {
    const categoryCount = randomCategories.filter(category => category === randomCategory).length;
    if (this.#checkCategoryCount(categoryCount)) {
      randomCategories.push(randomCategory);
    }
  }

  #checkCategoryCount(categoryCount) {
    return categoryCount < 2;
  }

  // RecommandMenus
  getRecommandMenus(categories) {
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

export default LunchMenuService;

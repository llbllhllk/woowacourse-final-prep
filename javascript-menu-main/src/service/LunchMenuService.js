import { Random } from '@woowacourse/mission-utils';
import CoachNames from '../domain/CoachNames.js';
import UnwantedMneus from '../domain/UnwantedMenus.js';
import CONSTANTS from '../constants/constants.js';

class LunchMenuService {
  #coachNames;

  #unwantedMenus;

  #categories;

  constructor() {
    this.#categories = [];
  }

  setCoachNames(coachNames) {
    this.#coachNames = new CoachNames(coachNames).getFormattedCoachNames();
  }

  getCoachNames() {
    return this.#coachNames;
  }

  setUnwantedMenus(unwantedMenus) {
    this.#unwantedMenus = new UnwantedMneus(unwantedMenus).getFormattedUnwantedMenus();
  }

  getUnwantedMenus() {
    return this.#unwantedMenus;
  }

  // Categories
  setCategories() {
    while (this.#categories.length < 5) {
      const randomNumber = Random.pickNumberInRange(1, 5);
      const randomCategory = CONSTANTS.category.list[randomNumber - 1];
      if (this.#categories.filter(category => category === randomCategory).length < 2)
        this.#categories.push(randomCategory);
    }
  }

  categories() {
    return this.#categories;
  }

  categoriesString() {
    return `[ 카테고리 | ${this.#categories.join(' | ')} ]`;
  }
}

export default LunchMenuService;

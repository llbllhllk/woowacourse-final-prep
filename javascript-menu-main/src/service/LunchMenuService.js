import { Random } from '@woowacourse/mission-utils';
import CoachName from '../domain/CoachName.js';
import UnwantedMenu from '../domain/UnwantedMenu.js';

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
    const categories = ['일식', '한식', '중식', '아시안', '양식'];
    const randomCategories = [];
    while (randomCategories.length < 5) {
      const randomCategory = categories[Random.pickNumberInRange(1, 5) - 1];
      if (randomCategories.filter(category => category === randomCategory).length < 2) {
        randomCategories.push(randomCategory);
      }
    }
    return randomCategories;
  }
}

export default LucnMenuService;

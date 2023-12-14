import { Random } from '@woowacourse/mission-utils';
import CoachName from '../domain/CoachName.js';
import UnwantedMenu from '../domain/UnwantedMenu.js';
import MENU from '../constants/menu.js';
import Categories from '../domain/Categories.js';
import RecommandMenus from '../domain/RecommandMenus.js';

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

  categories() {
    return new Categories().categories();
  }

  recommandMenus(randomCategories) {
    return new RecommandMenus(this.#coachName, this.#unwantedMenu).recommandMenus(randomCategories);
  }
}

export default LucnMenuService;

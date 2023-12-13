import CoachName from '../domain/CoachName.js';
import UnwantedMenu from '../domain/UnwantedMenu.js';
import Categories from '../domain/Categories.js';
import RecommandMenus from '../domain/RecommandMenus.js';

class LunchMenuService {
  #coachName;

  #unwantedMenu;

  #categories;

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

  setCategories() {
    this.#categories = new Categories().randomCategories();
  }

  randomCategories() {
    return this.#categories;
  }

  recommandMenus(categories) {
    return new RecommandMenus(this.#coachName, this.#unwantedMenu).recommandMenus(categories);
  }
}

export default LunchMenuService;

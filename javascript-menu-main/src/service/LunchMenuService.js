import CoachNames from '../domain/CoachNames.js';
import UnwantedMneus from '../domain/UnwantedMenus.js';

class LunchMenuService {
  #coachNames;

  #unwantedMenus;

  constructor() {}

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
}

export default LunchMenuService;

import CoachNames from '../domain/CoachNames.js';

class LunchMenuService {
  #coachNames;

  constructor() {}

  setCoachNames(coachNames) {
    this.#coachNames = new CoachNames(coachNames).getFormattedCoachNames();
  }

  getCoachNames() {
    return this.#coachNames;
  }
}

export default LunchMenuService;

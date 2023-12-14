import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

class CoachName {
  #formattedCoachName;

  constructor(coachName) {
    this.#validate(this.#formatCoachName(coachName));
    this.#formattedCoachName = this.#formatCoachName(coachName);
  }

  getFormattedCoachName() {
    return this.#formattedCoachName;
  }

  #validate(coachName) {
    coachName.forEach(name => {
      if (name.length < CONSTANTS.coach.minCount || name.length > CONSTANTS.coach.maxCount)
        throw new Error(ERROR.coachName.length);
    });
    if (coachName.length < CONSTANTS.coach.minCount || coachName.length > CONSTANTS.coach.maxCount)
      throw new Error(ERROR.coachName.range);
  }

  #formatCoachName(coachName) {
    return coachName
      .split(CONSTANTS.string.separator)
      .map(element => element.trim())
      .filter(Boolean);
  }
}

export default CoachName;

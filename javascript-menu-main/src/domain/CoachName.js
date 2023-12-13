import COACH_NAME from '../constants/coachName.js';
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
      if (name.length < COACH_NAME.length.min || name.length > COACH_NAME.length.max)
        throw new Error(ERROR.coachName.length);
    });
    if (coachName.length < COACH_NAME.count.min || coachName.length > COACH_NAME.count.max)
      throw new Error(ERROR.coachName.count);
  }

  #formatCoachName(coachName) {
    return coachName
      .split(CONSTANTS.string.separator)
      .map(element => element.trim())
      .filter(Boolean);
  }
}

export default CoachName;

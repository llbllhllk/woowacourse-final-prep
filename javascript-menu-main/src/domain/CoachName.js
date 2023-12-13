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
      if (name.length < 2 || name.length > 4)
        throw new Error('[ERROR] 코치의 이름은 최소 2글자, 최대 4글자이어야 합니다.');
    });
    if (coachName.length < 2 || coachName.length > 5)
      throw new Error('[ERROR] 코치는 최소 2명, 최대 5명까지 식사해야합니다.');
  }

  #formatCoachName(coachName) {
    return coachName
      .split(',')
      .map(element => element.trim())
      .filter(Boolean);
  }
}

export default CoachName;

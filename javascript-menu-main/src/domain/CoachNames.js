class CoachNames {
  #formattedCoachNames;

  constructor(coachNames) {
    this.#validate(this.#formatCoachNames(coachNames));
    this.#formattedCoachNames = this.#formatCoachNames(coachNames);
  }

  getFormattedCoachNames() {
    return this.#formattedCoachNames;
  }

  #validate(coachNames) {
    coachNames.forEach(name => {
      if (name.length < 2 || name.length > 4)
        throw new Error('[ERROR] 코치 이름은 최소 2글자, 최대 4글자이어야 합니다.');
    });
    if (coachNames.length < 2 || coachNames.length > 5)
      throw new Error('[ERROR] 코치는 최소 2명, 최대 5명까지 식사를 함께해야합니다.');
  }

  #formatCoachNames(coachNames) {
    return coachNames
      .split(',')
      .map(element => element.trim())
      .filter(Boolean);
  }
}

export default CoachNames;

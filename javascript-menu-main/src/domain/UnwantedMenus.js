class UnwantedMneus {
  #formattedUnwantedMenus;

  constructor(unwantedMenus) {
    this.#validate(this.#formatUnwantedMenus(unwantedMenus));
    this.#formattedUnwantedMenus = this.#formatUnwantedMenus(unwantedMenus);
  }

  getFormattedUnwantedMenus() {
    return this.#formattedUnwantedMenus;
  }

  #validate(unwantedMenus) {
    if (unwantedMenus.length > 2)
      throw new Error('[ERROR] 각 코치는 최소 0개, 최대 2개의 못 먹는 메뉴가 있어야합니다.');
  }

  #formatUnwantedMenus(unwantedMenus) {
    return unwantedMenus
      .split(',')
      .map(element => element.trim())
      .filter(Boolean);
  }
}

export default UnwantedMneus;

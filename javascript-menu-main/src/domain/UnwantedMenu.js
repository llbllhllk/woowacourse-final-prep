class UnwantedMenu {
  #formattedUnwantedMenu;

  constructor(unwantedMenu) {
    this.#validate(this.#formatUnwantedMenu(unwantedMenu));
    this.#formattedUnwantedMenu = this.#formatUnwantedMenu(unwantedMenu);
  }

  getFormattedUnwantedMenu() {
    return this.#formattedUnwantedMenu;
  }

  #validate(unwantedMenu) {
    if (unwantedMenu.length > 2)
      throw new Error('[ERROR] 최소 0개, 최대 2개의 못먹는 메뉴가 있어야합니다.');
  }

  #formatUnwantedMenu(unwantedMenu) {
    return unwantedMenu
      .split(',')
      .map(element => element.trim())
      .filter(Boolean);
  }
}

export default UnwantedMenu;

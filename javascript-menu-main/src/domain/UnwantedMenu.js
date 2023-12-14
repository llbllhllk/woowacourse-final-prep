import CONSTANTS from '../constants/constants.js';
import ERROR from '../constants/error.js';

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
    if (unwantedMenu.length > CONSTANTS.unwantedMenu.max) throw new Error(ERROR.unwantedMenu.range);
  }

  #formatUnwantedMenu(unwantedMenu) {
    return unwantedMenu
      .split(CONSTANTS.string.separator)
      .map(element => element.trim())
      .filter(Boolean);
  }
}

export default UnwantedMenu;

import CoachName from '../domain/CoachName.js';
import UnwantedMenu from '../domain/UnwantedMenu.js';
import reTry from '../utils/reTry.js';

class LunchMenuController {
  #lunchMenuService;

  #inputView;

  #outputView;

  constructor(lunchMenuService, inputView, outputView) {
    this.#lunchMenuService = lunchMenuService;
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  start() {
    this.#outputView.printStartString();

    return this.#inputCoachName();
  }

  async #inputCoachName() {
    return reTry(async () => {
      const coachName = await this.#inputView.readCoachName();
      const formattedCoachName = new CoachName(coachName).getFormattedCoachName();

      return this.#inputUnwantedMenu();
    });
  }

  async #inputUnwantedMenu() {
    return reTry(async () => {
      const unwantedMenu = await this.#inputView.readUnwantedMenu();
      const formattedUnwantedMenu = new UnwantedMenu(unwantedMenu);

      return this.#inputUnwantedMenu();
    });
  }
}

export default LunchMenuController;

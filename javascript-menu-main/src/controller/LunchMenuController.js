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
    return this.#inputCoachName();
  }

  async #inputCoachName() {
    return reTry(async () => {
      const coachName = await this.#inputView.readCoachName();

      return this.#inputUnwantedMenu();
    });
  }

  async #inputUnwantedMenu() {
    return reTry(async () => {
      const unwantedMenu = await this.#inputView.readUnwantedMenu();
      
      return this.#inputUnwantedMenu();
    });
  }
}

export default LunchMenuController;

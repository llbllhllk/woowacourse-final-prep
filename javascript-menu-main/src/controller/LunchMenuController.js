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
    return this.#inputCoachNames();
  }

  async #inputCoachNames() {
    return reTry(async () => {
      const coachNames = await this.#inputView.readCoachNames();

      return this.#inputUnwantedMenus(coachNames);
    });
  }

  async #inputUnwantedMenus(coachNames) {
    return reTry(async () => {
      await coachNames.reduce(async (promise, name) => {
        await promise;
        const unwantedMenus = await this.#inputView.readUnwantedMenus(name);

        console.log(unwantedMenus);
      }, Promise.resolve());

      return this.#inputUnwantedMenus();
    });
  }
}

export default LunchMenuController;

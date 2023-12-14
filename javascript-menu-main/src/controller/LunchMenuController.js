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
      this.#lunchMenuService.setCoachName(coachName);

      return this.#inputUnwantedMenu();
    });
  }

  async #inputUnwantedMenu() {
    return reTry(async () => {
      const coachName = this.#lunchMenuService.getCoachName();
      await coachName.reduce(async (promise, name) => {
        await promise;
        const unwantedMenu = await this.#inputView.readUnwantedMenu(name);
        this.#lunchMenuService.setUnwantedMenu(unwantedMenu);
      }, Promise.resolve());

      return this.#printResult();
    });
  }

  #printResult() {
    const randomCategories = this.#lunchMenuService.categories();
    this.#outputView.printResultString(randomCategories);
  }
}

export default LunchMenuController;

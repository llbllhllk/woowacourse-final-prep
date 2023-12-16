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
    return this.#inputCoachNames();
  }

  async #inputCoachNames() {
    return reTry(async () => {
      const coachNames = await this.#inputView.readCoachNames();
      this.#lunchMenuService.setCoachNames(coachNames);
      return this.#inputUnwantedMenus();
    });
  }

  async #inputUnwantedMenus() {
    return reTry(async () => {
      const coachNames = this.#lunchMenuService.getCoachNames();
      await coachNames.reduce(async (promise, name) => {
        await promise;
        const unwantedMenus = await this.#inputView.readUnwantedMenus(name);
        this.#lunchMenuService.setUnwantedMenus(unwantedMenus);
      }, Promise.resolve());
      return this.#printResult();
    });
  }

  #printResult() {
    this.#outputView.printResultHeaderString();
    this.#outputView.printWeekString();
    this.#lunchMenuService.setCategories();
    const categoriesString = this.#lunchMenuService.categoriesString();
    this.#outputView.printCategoriesString(categoriesString);
    this.#outputView.printEndString();
  }
}

export default LunchMenuController;

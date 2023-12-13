import { Random } from '@woowacourse/mission-utils';
import CoachName from '../domain/CoachName.js';
import UnwantedMenu from '../domain/UnwantedMenu.js';
import reTry from '../utils/reTry.js';

class LunchMenuController {
  #lunchMenuService;

  #inputView;

  #outputView;

  constructor(lunchMenuservice, inputView, outputView) {
    this.#lunchMenuService = lunchMenuservice;
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
    const coachName = this.#lunchMenuService.getCoachName();
    return reTry(async () => {
      await coachName.reduce(async (promise, name) => {
        await promise;
        const unwantedMenu = await this.#inputView.readUnwantedMenu(name);
        this.#lunchMenuService.setUnwantedMenu(unwantedMenu);
      }, Promise.resolve());
      return this.#printResult();
    });
  }

  #printResult() {
    this.#lunchMenuService.setCategories();
    const categories = this.#lunchMenuService.randomCategories();
    const recommandMenus = this.#lunchMenuService.recommandMenus(categories); 
    this.#outputView.printResultString(categories, recommandMenus);
  }
}

export default LunchMenuController;

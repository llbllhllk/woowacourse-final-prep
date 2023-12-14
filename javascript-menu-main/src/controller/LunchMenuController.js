import { Random } from '@woowacourse/mission-utils';
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

      return this.#inputUnwantedMenu(formattedCoachName);
    });
  }

  async #inputUnwantedMenu(formattedCoachName) {
    const formattedUnwantedMenu = [];
    return reTry(async () => {
      await formattedCoachName.reduce(async (promise, name) => {
        await promise;
        const unwantedMenu = await this.#inputView.readUnwantedMenu(name);
        formattedUnwantedMenu.push(new UnwantedMenu(unwantedMenu).getFormattedUnwantedMenu());
      }, Promise.resolve());

      return this.#printCategories(formattedCoachName, formattedUnwantedMenu);
    });
  }

  #printCategories(formattedCoachName, formattedUnwantedMenu) {
    const categories = ['일식', '한식', '중식', '아시안', '양식'];
    const randomCategories = [];
    while (randomCategories.length < 5) {
      const randomCategory = categories[Random.pickNumberInRange(1, 5) - 1];
      if (randomCategories.filter(category => category === randomCategory).length < 2) {
        randomCategories.push(randomCategory);
      }
    }
  }
}

export default LunchMenuController;

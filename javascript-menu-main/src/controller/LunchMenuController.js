import { Random } from '@woowacourse/mission-utils';
import CoachName from '../domain/CoachName.js';
import UnwantedMenu from '../domain/UnwantedMenu.js';
import reTry from '../utils/reTry.js';

class LunchMenuController {
  // #service;

  #inputView;

  #outputView;

  constructor(inputView, outputView) {
    // param: service
    // this.#service = service;
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
    return reTry(async () => {
      await formattedCoachName.reduce(async (promise, name) => {
        await promise;
        const unwantedMenu = await this.#inputView.readUnwantedMenu(name);
        const formattedUnwantedMenu = new UnwantedMenu(unwantedMenu).getFormattedUnwantedMenu();
      }, Promise.resolve());

      return this.#printResult();
    });
  }

  #printResult() {
    this.#outputView.printResultString();
    const randomCateogry = this.#getRandomCategories();
    console.log(randomCateogry);
  }

  #getRandomCategories() {
    const categories = ['일식', '한식', '중식', '아시안', '양식'];
    const randomCategories = [];
    while (randomCategories.length < 5) {
      const randomIndex = Random.pickNumberInRange(1, 5);
      const randomCategory = categories[randomIndex - 1];
      const categoryCount = randomCategories.filter(category => category === randomCategory).length;
      if (categoryCount < 2) {
        randomCategories.push(randomCategory);
      }
    }
    return randomCategories;
  }
}

export default LunchMenuController;

import { Random } from '@woowacourse/mission-utils';
import CoachName from '../domain/CoachName.js';
import UnwantedMenu from '../domain/UnwantedMenu.js';
import reTry from '../utils/reTry.js';
import MENU from '../constants/menu.js';

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
      const formattedUnwantedMenu = [];
      await formattedCoachName.reduce(async (promise, name) => {
        await promise;
        const unwantedMenu = await this.#inputView.readUnwantedMenu(name);
        formattedUnwantedMenu.push(new UnwantedMenu(unwantedMenu).getFormattedUnwantedMenu());
      }, Promise.resolve());

      return this.#printResult(formattedCoachName, formattedUnwantedMenu);
    });
  }

  #printResult(formattedCoachName, formattedUnwantedMenu) {
    const categories = this.#getRandomCategories();
    const resultArray = formattedCoachName.map((name, index) => {
      const unwantedMenus = formattedUnwantedMenu[index];
      return [name, unwantedMenus];
    });
    const recommandMenus = this.#getRecommandMenus(resultArray, categories);

    this.#outputView.printResultString(categories, recommandMenus);
  }

  #getRecommandMenus(inputArray, categories) {
    return inputArray.map(([name, unwantedMenus]) => {
      const recommendedMenus = [];
      while (recommendedMenus.length < 5) {
        let randomMenu;

        // 각 카테고리에 대해 랜덤한 메뉴를 선택
        categories.forEach(category => {
          const numbers = Array.from({ length: 9 }, (_, index) => index + 1);
          const categoryMenu = MENU.list[category].split(', ');
          const randomIndex = Random.shuffle(numbers)[0] - 1;
          randomMenu = categoryMenu[randomIndex];

          // 중복 체크와 원치 않는 메뉴 체크
          if (!recommendedMenus.includes(randomMenu) && !unwantedMenus.includes(randomMenu)) {
            recommendedMenus.push(randomMenu);
          }
        });
      }
      return [name, recommendedMenus];
    });
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

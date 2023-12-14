import { Random } from '@woowacourse/mission-utils';
import CONSTANTS from '../constants/constants.js';

class Categories {
  #categories;

  constructor() {
    this.#categories = CONSTANTS.categories.list;
  }

  categories() {
    const randomCategories = [];
    while (randomCategories.length < CONSTANTS.categories.length) {
      const randomCategory = this.#generateRandomCategory();
      if (
        randomCategories.filter(category => category === randomCategory).length <
        CONSTANTS.categories.maxRange
      )
        randomCategories.push(randomCategory);
    }
    return randomCategories;
  }

  #generateRandomCategory() {
    return this.#categories[
      Random.pickNumberInRange(CONSTANTS.random.from, CONSTANTS.random.to) - 1
    ];
  }
}

export default Categories;

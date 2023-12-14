import { Random } from '@woowacourse/mission-utils';

class Categories {
  #categories;

  constructor() {
    this.#categories = ['일식', '한식', '중식', '아시안', '양식'];
  }

  categories() {
    const randomCategories = [];
    while (randomCategories.length < 5) {
      const randomCategory = this.#generateRandomCategory();
      if (randomCategories.filter(category => category === randomCategory).length < 2) {
        randomCategories.push(randomCategory);
      }
    }
    return randomCategories;
  }

  #generateRandomCategory() {
    return this.#categories[Random.pickNumberInRange(1, 5) - 1];
  }
}

export default Categories;

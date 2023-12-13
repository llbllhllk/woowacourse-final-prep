import { Random } from '@woowacourse/mission-utils';
import CATEGORY from '../constants/category.js';

class Categories {
  randomCategories() {
    const categories = CATEGORY.list;
    const randomCategories = [];
    while (randomCategories.length < CATEGORY.length) {
      this.#generateRandomCategory(randomCategories, categories);
    }
    return randomCategories;
  }

  #generateRandomCategory(randomCategories, categories) {
    const randomIndex = Random.pickNumberInRange(CATEGORY.index.from, CATEGORY.index.to);
    const randomCategory = categories[randomIndex - 1];
    this.#checkRangeDuplicated(randomCategories, randomCategory);
  }

  #checkRangeDuplicated(randomCategories, randomCategory) {
    const categoryCount = randomCategories.filter(category => category === randomCategory).length;
    if (this.#checkCategoryCount(categoryCount)) {
      randomCategories.push(randomCategory);
    }
  }

  #checkCategoryCount(categoryCount) {
    return categoryCount < CATEGORY.range;
  }
}

export default Categories;

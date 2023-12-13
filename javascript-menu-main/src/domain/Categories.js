import { Random } from '@woowacourse/mission-utils';

class Categories {
  randomCategories() {
    const categories = ['일식', '한식', '중식', '아시안', '양식'];
    const randomCategories = [];
    while (randomCategories.length < 5) {
      this.#generateRandomCategory(randomCategories, categories);
    }
    return randomCategories;
  }

  #generateRandomCategory(randomCategories, categories) {
    const randomIndex = Random.pickNumberInRange(1, 5);
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
    return categoryCount < 2;
  }
}

export default Categories;

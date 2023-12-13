import CONSTANTS from '../constants/constants.js';

class Profit {
  #matchResult;

  #amount;

  constructor(matchResult, amount) {
    this.#matchResult = matchResult;
    this.#amount = amount;
  }

  profit() {
    this.#matchResult.shift();
    const prize = CONSTANTS.prize;
    const multipliedValues = this.#multipliedValues(prize);
    const totalPrize = this.#totalPrize(multipliedValues);
    const totalProfit = this.#totalProfit(totalPrize);

    return totalProfit;
  }

  #multipliedValues(prize) {
    return this.#matchResult.map((element, index) => element * prize[index]);
  }

  #totalPrize(multipliedValues) {
    return multipliedValues.reduce((acc, currentValue) => acc + currentValue, 0);
  }

  #totalProfit(totalPrize) {
    return ((totalPrize / this.#amount) * CONSTANTS.profit.percentage).toFixed(
      CONSTANTS.rounding.secondRound,
    );
  }
}

export default Profit;

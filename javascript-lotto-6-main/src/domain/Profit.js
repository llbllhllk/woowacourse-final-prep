class Profit {
  #matchResult;

  #amount;

  constructor(matchResult, amount) {
    this.#matchResult = matchResult;
    this.#amount = amount;
  }

  profit() {
    this.#matchResult.shift();
    const matchValues = [5000, 50000, 1500000, 30000000, 2000000000];
    const multipliedValues = this.#multipliedValues(matchValues);
    const totalPrize = this.#totalPrize(multipliedValues);
    const totalProfit = this.#totalProfit(totalPrize);

    return totalProfit;
  }

  #multipliedValues(matchValues) {
    return this.#matchResult.map((element, index) => element * matchValues[index]);
  }

  #totalPrize(multipliedValues) {
    return multipliedValues.reduce((acc, currentValue) => acc + currentValue, 0);
  }

  #totalProfit(totalPrize) {
    return ((totalPrize / this.#amount) * 100).toFixed(1);
  }
}

export default Profit;

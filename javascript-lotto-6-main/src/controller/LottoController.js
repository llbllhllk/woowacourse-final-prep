import reTry from '../utils/reTry.js';

class LottoController {
  #lottoService;

  #inputView;

  #outputView;

  constructor(lottoService, inputView, outputView) {
    this.#lottoService = lottoService;
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  start() {
    return this.#inputPurchase();
  }

  async #inputPurchase() {
    return reTry(async () => {
      const purchase = await this.#inputView.readPurchase();
      this.#lottoService.setAmount(purchase);

      return this.#printNumberOfPurchase();
    });
  }

  #printNumberOfPurchase() {
    const numberOfPurchase = this.#lottoService.numberOfPurchase();
    this.#outputView.printNumberOfPurchase(numberOfPurchase);

    return this.#printLottos();
  }

  #printLottos() {
    this.#lottoService.setLottoMachine();
    const lottosString = this.#lottoService.lottosString();
    this.#outputView.printLottosString(lottosString);

    return this.#inputWinningNumbers();
  }

  async #inputWinningNumbers() {
    return reTry(async () => {
      const winningNumbers = await this.#inputView.readWinningNumbers();
      this.#lottoService.setWinningNumbers(winningNumbers);

      return this.#inputBonusNumber();
    });
  }

  async #inputBonusNumber() {
    return reTry(async () => {
      const bonusNumber = await this.#inputView.readBonusNumber();
      this.#lottoService.setBonusNumber(bonusNumber);

      return this.#printResult();
    });
  }

  #printResult() {
    this.#outputView.printResultHeader();
    const matchResult = this.#lottoService.matchResult();
    this.#outputView.printResult(matchResult);

    return this.#printProfit();
  }

  #printProfit() {
    const profit = this.#lottoService.profit();
    this.#outputView.printProfit(profit);
  }
}

export default LottoController;

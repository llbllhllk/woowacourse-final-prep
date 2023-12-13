import BonusNumber from '../domain/BonusNumber.js';
import Purchase from '../domain/Purchase.js';
import WinningNumbers from '../domain/WinningNumbers.js';
import LottoMachine from '../domain/LottoMachine.js';

class LottoService {
  #amount;

  #winningNumbers;

  #bonusNumber;

  #lottoMachine;

  setAmount(purchase) {
    this.#amount = new Purchase(purchase);
  }

  amout() {
    return this.#amount.getFormattedAmount();
  }

  numberOfPurchase() {
    return this.#amount.numberOfPurchase();
  }

  setWinningNumbers(winningNumbers) {
    this.#winningNumbers = new WinningNumbers(winningNumbers).getFormattedWinningNumbers();
  }

  setBonusNumber(bonusNumber) {
    this.#bonusNumber = new BonusNumber(bonusNumber).getFormattedBonusNumber();
  }

  setLottoMachine() {
    this.#lottoMachine = new LottoMachine(this.numberOfPurchase());
  }

  lottosString() {
    return this.#lottoMachine.lottosString();
  }

  matchResult() {
    return this.#lottoMachine.matchResult(this.#winningNumbers, this.#bonusNumber);
  }

  profit() {
    return this.#lottoMachine.profit(this.amout());
  }
}

export default LottoService;

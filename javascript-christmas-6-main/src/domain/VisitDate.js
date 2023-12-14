class VisitDate {
  #formattedVisitDate;

  constructor(visitDate) {
    this.#validate(this.#formatVisitDate(visitDate));
    this.#formattedVisitDate = this.#formatVisitDate(visitDate);
  }

  getFormattedVisitDate() {
    return this.#formattedVisitDate;
  }

  #validate(visitDate) {
    if (Number.isNaN(visitDate)) throw new Error('[ERROR] 숫자를 입력해주세요.');
    if (visitDate < 1 || visitDate > 31)
      throw new Error('[ERROR] 유효하지 않은 날짜입니다. 다시 입력해 주세요.');
  }

  #formatVisitDate(visitDate) {
    return Number(visitDate);
  }
}

export default VisitDate;

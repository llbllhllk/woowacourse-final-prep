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
    return this.#inputCoachName();
  }

  async #inputCoachName() {
    const coachName = await this.#inputView.readCoachName();

    console.log(coachName);
  }
}

export default LunchMenuController;

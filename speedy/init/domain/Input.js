class Input {
  #formattedInput;

  constructor(input) {
    this.#validate(this.#formatInput(input));
    this.#formattedInput = this.#formatInput(input);
  }

  getFormattedInput() {
    return this.#formattedInput;
  }

  #validate(input) {}

  #formatInput(input) {
    return input;
  }
}

export default Input;

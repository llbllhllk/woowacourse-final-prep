class Input {
  #formattedInput;

  constructor(input) {
    this.#validate(this.#format(input));
    this.#formattedInput = this.#format(input);
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

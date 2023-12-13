## 🏃‍♂️ 구현 순서

> ### 요구사항 구현
>
> 1. 프로젝트 구성
> 2. 사용자 입력 기능 구현
> 3. 간단한 출력 기능 구현
> 4. 사용자 입력 관련 Domain 구성
> 5. 비즈니스 로직 구현
> 6. ApplicationTest 확인
>
> ### 리팩토링
>
> 1. service 분리
> 2. 상수화
>
> ### 테스트
>
> 1. test 작성

<br />

## 👀 패키지 설치 전 node version 확인

```bash
node -v  // 버전 확인
nvm install 14.0.0  // 버전 설치
nvm use 14.0.0  // 버전 사용
```

<br />

## 😎 branch 생성 및 패키지 설치

```bash
node -v  // 버전 확인
nvm install 14.0.0  // 버전 설치
nvm use 14.0.0  // 버전 사용
```

<br />

## 📝 기능 목록 작성

```md
## 📄 기능 목록

- 입력

- 출력

- 기능

## 🎯 예외 상황
```

<br />

## 🖥️ view

### InputView.js

```javascript
import { Console } from '@woowacourse/mission-utils';

const InputView = {
  async read() {
    const returnValue = await Console.readLineAsync();

    return returnValue;
  },
};

export default InputView;
```

### OutputView.js

```javascript
import { Console } from '@woowacourse/mission-utils';

const OutputView = {
  printString() {
    Console.print();
  },
};

export default OutputView;
```

<br />

## 📂 utils

### retry.js

```javascript
import { Console } from '@woowacourse/mission-utils';

const reTry = async callback => {
  while (true) {
    try {
      return await callback();
    } catch ({ message }) {
      Console.print(message);
    }
  }
};

export default reTry;
```

<br />

## 🕹️ Controller

### Controller.js

```javascript
class Controller {
  // #service;

  #inputView;

  #outputView;

  constructor(inputView, outputView) {
    // param: service
    // this.#service = service;
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  start() {}
}

export default Controller;
```

### reTry 적용

```javascript
  async #inputData() {
    return reTry(async () => {
      const input = await this.#inputView.read();
      const formattedInput = new Purchase(input).getFormattedAmount();

      return this.#printNumberOfPurchase(formattedInput);
    });
  }
```

### 특정 개수 만큼 사용자 입력을 반복적으로 받고 싶은 경우

```javascript
  async #inputData() {
    const array = this.#lunchMenuService.getCoachNames();

		await array.reduce(async (promise, element) => {
      await promise;
      const input = await this.#inputView.read(element);
    }, Promise.resolve());
  }
```

<br />

## 🦴 App

```javascript
import InputView from './view/InputView.js';
import OutputView from './view/OutputView.js';

class App {
  #Controller;

  constructor() {
    // const Service = new Service();
    this.#Controller = new Controller(InputView, OutputView);
  }

  async play() {
    return this.#Controller.start();
  }
}

export default App;
```

<br />

## 🗂️ Domain

### 입력

```javascript
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
```

- **(,) 구분 formating**

```javascript
#format(stirng) {
  return string
    .split(',')
    .map(element => element.trim())
    .filter(Boolean);
}
```

<br />

## 🎯 Validation

- **아무 값도 입력하지 않았을 경우**

```javascript
static #validateEmpty(numbers) {
  if (numbers.length === CONSTANTS.number.zero) throw new Error(ERROR.numbers.empty);
}
```

- **숫자가 아닌 경우**

```javascript
static #validateNaN(numbers) {
  if (Number.isNaN(Number(numbers))) throw new Error(ERROR.numbers.notANumber);
}
```

- **음수인 경우**

```javascript
static #validateNegative(numbers) {
  if (Number(numbers) < CONSTANTS.number.zero) throw new Error(ERROR.numbers.negative);
}
```

- **중복인 경우 (배열안에 있는 값일 경우)**

```javascript
static #validateDuplicated(numbers) {
  if (numbers.length !== new Set(numbers).size) throw new Error(ERROR.numbers.duplicated);
}
```

- **중복인 경우 (구분되어 있는 값일 경우)**

```javascript
static #validateDuplicated(numbers) {
	const formattedNumbers = numbers
	.split(CONSTANTS.numbers.separator)
	.map(number => number.trim())
	.filter(Boolean);
   if (formattedNumbers.length !== new Set(formattedNumbers).size)
     throw new Error(ERROR.numbers.duplicated);
}
```

- **구분을 잘못했을 경우**

```javascript
static #validateSeparator(winningNumbers) {
  const formattedWinningNumbers = winningNumbers
    .split(CONSTANTS.winningNumbers.separator)
    .map(number => number.trim());
  const emptyNumberCount = formattedWinningNumbers.filter(number => !number.trim()).length;
  if (emptyNumberCount > CONSTANTS.number.zero) throw new Error(ERROR.winningNumbers.separator);
}
```

## ⛳️ Constants

### constants.js

```jsx
const CONSTANTS = Object.freeze({});

export default CONSTANTS;
```

### error.js

```jsx
const ERROR = Object.freeze({});

export default ERROR;
```

### message.js

```jsx
const read = Object.freeze({});

const print = Object.freeze({});

const MESSAGE = Object.freeze({});

export default MESSAGE;
```

<br />

## ✅ Test

### 도메인 로직 테스트

```javascript
describe('~ 클래스 테스트', () => {
  describe('~메서드는 ~를 입력받아 ~를 반환한다.', () => {
    const cases = [
      { numbers: [1, 2, 3], computerNumbers: [2, 3, 1], expected: 0 },
    ];

    test.each(cases)(
      '$~가 주어지는 경우, ~()는 ~인 $expected를 반환한다.',
      ({ numbers, computerNumbers, expected }) => {
        // when
        const result = new Class(numbers, computerNumbers).calculateStrikeCount();

        // then
        expect(result).toEqual(expected);
      },
    );
  });
});
```

### ✨ mockRandoms

```javascript
import { Random } from '@woowacourse/mission-utils';

const mockRandoms = numbers => {
  Random.pickUniqueNumbersInRange = jest.fn();
  numbers.map(number => Random.pickUniqueNumbersInRange.mockReturnValueOnce(number));
};

// given(or cases)
const numbers = [
  [1, 2, 3],
  [1, 2, 3],
  [1, 2, 3],
];

mockRandoms(numbers);
```

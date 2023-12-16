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
    return await Console.readLineAsync();
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
import reTry from '../utils/reTry.js';

class Controller {
  #Service;

  #inputView;

  #outputView;

  constructor(Service, inputView, outputView) {
    this.#Service = Service;
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
    const Service = new Service();
    this.#Controller = new Controller(Service, InputView, OutputView);
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

<br />

## 🛠️ Service

```javascript
class Service {
  // #inputs

  constructor() {}

  // setInputs()
}

export default Service;
```

- 사용자 입력에 해당하는 부분만 service에서 set함수를 만든다.

### do, while

- 특정 조건문에 해당해서 다시 수행하고 싶을 때 사용한다.


```javascript
let menu // do 바깥에 선언해야 while에서 인식 가능, do block에 선언하면 해당 변수는 while에서 읽지 못함.

do {
  menu = ...
	// 해당 블럭은 먼저 실행하고 while 조건문을 확인한다.
} while(해당 조건문에 해당하면 다시 do블럭을 수행한다.)
```

<br />

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

const MESSAGE = Object.freeze({ read, print });

export default MESSAGE;
```

<br />

## ✅ Test

### 도메인 로직 테스트

```javascript
describe('~ 클래스 테스트', () => {
  describe('~메서드는 ~를 입력받아 ~를 반환한다.', () => {
    const cases = [{ numbers: [1, 2, 3], computerNumbers: [2, 3, 1], expected: 0 }];

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

<br />

## 🥳 소감문

### 📄 기능 목록 및 예외 상황 작성

구현을 시작하기 전에 기능 목록을 작성하였습니다 . 입력, 출력, 핵심 기능을 기준으로 나누었고 추가로 입력에 대한 예외 상황도 고려하여 작성하였습니다. 기능 목록 작성에는 정답이 없음을 알기에 구현 과정에서 필요에 따라 수정할 계획이어서 처음에는 구상하는대로 작성하고 필요한 기능과 예외상황이 생기면 추가작성하도록 하였습니다.

### 🗂️ MVC 패턴을 활용한 클래스(객체) 분리

View 영역에는 입/출력과 관련된 객체들을 구성하였습니다. 사용자와의 인터페이스를 처리하고 입력을 받아서 Controller 영역으로 전달하는 역할을 담당했습니다.

Controller 영역에는 로또 게임의 실행 로직을 작성하였습니다. 입력을 받아 도메인 영역의 클래스들을 활용하여 게임을 진행하고 결과를 반환하는 역할을 수행했습니다.

Domain 영역에는 여러 도메인 클래스들과 유효성 검사와 관련된 클래스들을 생성하였습니다. 각자의 역할에 맞게 핵심 로직을 구현하고, 게임의 규칙을 적용하며 유효성을 검사하는 역할을 수행했습니다.

### ✅ 단위 테스트 작성

각 도메인 로직을 단위로 테스트 케이스를 작성했습니다. 도메인 로직와 유효성 검사와 관련한 기능들을 시나리오를 구성하여 테스트 코드를 작성하였습니다.

### **🖌️ Airbnb 스타일 준수**

for문을 지양하고 고차함수로 이를 대체하는데 신경썼습니다. 또한 함수 작성시 15라인을 넘기거나 indent가 2를 넘지 않도록 적절한 함수 분리에 신경썼습니다.

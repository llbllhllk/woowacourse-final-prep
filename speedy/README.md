### 패키지 설치 전 node version 확인

```bash
node -v  // 버전 확인
nvm install 14.0.0  // 버전 설치
nvm use 14.0.0  // 버전 사용
```

### branch 생성 및 패키지 설치

```bash
node -v  // 버전 확인
nvm install 14.0.0  // 버전 설치
nvm use 14.0.0  // 버전 사용
```

### reTry.js 필요 유무 확인

- 사용자로 부터 입력을 다시 받고 에러메시지를 로그에 찍는지 확인한다.

### 📝 기능 목록 작성

```md
## 📄 기능 목록

- 입력

- 출력

- 기능

## 🎯 예외 상황
```

## 🖥️ view

### InputView.js

```javascript
import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';
import reTry from '../utils/reTry.js';

const InputView = {
  async read() {
    return reTry(async () => {
      const returnValue = await Console.readLineAsync();
      // Validator

      return returnValue;
    });
  },
};

export default InputView;
```

### OutputView.js

```javascript
import { Console } from '@woowacourse/mission-utils';
import MESSAGE from '../constants/message.js';

const OutputView = {
  printString() {
    Console.print();
  },
};

export default OutputView;
```

## 📂 utils
### retry.js

```java
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

## 🕹️ Controller

```javascript
class Controller {
  // #service;

  #inputView;

  #outputView;

  constructor(inputView, outputView) { // param: service
    // this.#service = service;
    this.#inputView = inputView;
    this.#outputView = outputView;
  }

  start() {}
}

export default Controller;
```

## 🗂️ Domain

### 입력

```javascript
class Input {
  #formattedInput;

  constructor(input) {
    this.#validate(this.#format(input));
    this.#formattedInput = this.#format(input);
  }

  getFormattedCoachNames() {
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

## 🎯Validation
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
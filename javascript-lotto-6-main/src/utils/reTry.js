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

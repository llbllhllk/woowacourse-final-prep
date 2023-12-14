import Categories from '../src/domain/Categories.js';

import { Random } from '@woowacourse/mission-utils';

const mockRandoms = numbers => {
  Random.pickNumberInRange = jest.fn();
  numbers.map(number => Random.pickNumberInRange.mockReturnValueOnce(number));
};

describe('Categories 클래스 테스트', () => {
  describe('categories메서드는 랜덤한 카테고리를 배열 형태로 반환한다.', () => {
    const cases = [
      { numbers: [1, 1, 2, 3, 4], expected: ['일식', '일식', '한식', '중식', '아시안'] },
      { numbers: [2, 3, 1, 4, 4], expected: ['한식', '중식', '일식', '아시안', '아시안'] },
      { numbers: [5, 3, 1, 1, 2], expected: ['양식', '중식', '일식', '일식', '한식'] },
    ];

    test.each(cases)(
      '$categories()는 랜덤한 카테고리인 $expected를 반환한다.',
      ({ numbers, expected }) => {
        // given
        mockRandoms(numbers);

        // when
        const result = new Categories().categories();

        // then
        expect(result).toEqual(expected);
      },
    );
  });
});

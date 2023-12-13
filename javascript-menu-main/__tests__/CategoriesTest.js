import Categories from '../src/domain/Categories.js';
import { Random } from '@woowacourse/mission-utils';

const mockRandoms = index => {
  Random.pickNumberInRange = jest.fn();
  index.map(index => Random.pickNumberInRange.mockReturnValueOnce(index));
};

describe('Categories 클래스 테스트', () => {
  describe('randomCategories 메서드는 랜덤한 카테고리를 반환한다.', () => {
    const cases = [
      {
        index: [1, 2, 2, 3, 4],
        expected: ['일식', '한식', '한식', '중식', '아시안'],
      },
      {
        index: [1, 2, 3, 4, 4],
        expected: ['일식', '한식', '중식', '아시안', '아시안'],
      },
      {
        index: [1, 3, 3, 2, 1],
        expected: ['일식', '중식', '중식', '한식', '일식'],
      },
    ];

    test.each(cases)(
      '$category 시나리오가 주어지는 경우, randomCategories()는 랜덤한 카테고리인 $expected를 반환한다.',
      ({ index, expected }) => {
        // given
        mockRandoms(index);

        // when
        const result = new Categories().randomCategories();

        // then
        expect(result).toEqual(expected);
      },
    );
  });
});

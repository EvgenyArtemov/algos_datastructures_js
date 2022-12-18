import { expect, test } from '@jest/globals';
import { sortArrayByParity, sortArrayByParity2 } from './sortArrayByParity';

// Input: nums = [3,1,2,4]
// Output: [2,4,3,1]
// Explanation: The outputs [4,2,3,1], [2,4,1,3], and [4,2,1,3] would also be accepted.

test('sortedByPAruty', () => {
  expect(sortArrayByParity([3, 1, 2, 4])).toEqual([4, 2, 1, 3]);
});
test('sortedByPAruty2', () => {
  expect(sortArrayByParity2([3, 1, 2, 4])).toEqual([4, 2, 3, 1]);
});

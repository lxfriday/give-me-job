import { findKthNumber } from './findKthNumber'

// 字典序的排列是 [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]，所以第二小的数字是 10。
test('#440 字典序的第K小数字', () => {
  expect(findKthNumber(13, 2)).toBe(10)
  expect(findKthNumber(13, 3)).toBe(11)
  expect(findKthNumber(13, 4)).toBe(12)
  expect(findKthNumber(13, 5)).toBe(13)
  expect(findKthNumber(13, 6)).toBe(2)
  expect(findKthNumber(13, 7)).toBe(3)
  expect(findKthNumber(13, 8)).toBe(4)
  expect(findKthNumber(13, 9)).toBe(5)
  expect(findKthNumber(13, 10)).toBe(6)
  expect(findKthNumber(13, 11)).toBe(7)
  expect(findKthNumber(13, 12)).toBe(8)
  expect(findKthNumber(13, 13)).toBe(9)
})

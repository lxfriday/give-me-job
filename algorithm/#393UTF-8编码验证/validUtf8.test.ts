import { validUtf8 } from './validUtf8'

// 字典序的排列是 [1, 10, 11, 12, 13, 2, 3, 4, 5, 6, 7, 8, 9]，所以第二小的数字是 10。
test('#440 字典序的第K小数字', () => {
  expect(validUtf8([197, 130, 1])).toBe(true)
  expect(validUtf8([197, 130, 1, 1, 1, 1])).toBe(true)
  expect(validUtf8([235, 140, 4])).toBe(false)
  expect(validUtf8([250, 145, 145, 145, 145])).toBe(false)
  expect(validUtf8([240, 162, 138, 147, 145])).toBe(false)
  expect(validUtf8([240, 162, 138, 147])).toBe(true)
  expect(validUtf8([240, 162, 138, 147, 1, 2, 3])).toBe(true)
})

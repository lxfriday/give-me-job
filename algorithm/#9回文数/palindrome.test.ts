import { isPalindrome1, isPalindrome2 } from './palindrome'

test('回文数', () => {
  expect(isPalindrome1(121)).toBe(true)
  expect(isPalindrome1(12121)).toBe(true)
  expect(isPalindrome1(121212)).toBe(false)
  expect(isPalindrome1(221)).toBe(false)
  expect(isPalindrome1(221122)).toBe(true)

  expect(isPalindrome2(121)).toBe(true)
  expect(isPalindrome2(12121)).toBe(true)
  expect(isPalindrome2(121212)).toBe(false)
  expect(isPalindrome2(221)).toBe(false)
  expect(isPalindrome2(221122)).toBe(true)
})

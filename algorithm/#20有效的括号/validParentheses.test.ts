import { isValidParentheses1 } from './validParentheses'

test('#20 有效的括号对', () => {
  expect(isValidParentheses1('()')).toBe(true)
  expect(isValidParentheses1('([])')).toBe(true)
  expect(isValidParentheses1('([])}')).toBe(false)
  expect(isValidParentheses1('([{}])')).toBe(true)
  expect(isValidParentheses1('}')).toBe(false)
})

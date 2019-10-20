import { plus, minus, divide, times } from './index'

test('javascript/number-precision-operation', () => {
  expect(plus(0.1, 0.2)).toBe(0.3) // 0.30000000000000004
  expect(plus(0.1, 0.7)).toBe(0.8) // 0.7999999999999999
  expect(minus(1, 0.9)).toBe(0.1) // 0.09999999999999998
  expect(divide(0.1, 0.3)).toBe(0.3333333333333333) // 0.33333333333333337
  expect(times(0.1, 0.1)).toBe(0.01) // 0.010000000000000002
})

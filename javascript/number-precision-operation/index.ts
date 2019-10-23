import { digitLength } from './digitLength'
import { baseNum } from './baseNum'

// 加
export function plus(num1: number, num2: number): number {
  const bn = baseNum(num1, num2)
  return (num1 * bn + num2 * bn) / bn
}

// 减
export function minus(num1: number, num2: number): number {
  const bn = baseNum(num1, num2)
  return (num1 * bn - num2 * bn) / bn
}

export function divide(num1: number, num2: number): number {
  const bn = baseNum(num1, num2)
  const intNum1 = num1 * bn
  const intNum2 = num2 * bn
  return intNum1 / intNum2
}

export function times(num1: number, num2: number): number {
  const bn = digitLength(num1) + digitLength(num2)
  const intNum1 = num1 * Math.pow(10, digitLength(num1))
  const intNum2 = num2 * Math.pow(10, digitLength(num2))
  return (intNum1 * intNum2) / Math.pow(10, bn)
}

console.log('plus', plus(0.1, 0.2), 0.1 + 0.2)
console.log('plus', minus(1, 0.9), 1 - 0.9)
console.log('divide', divide(0.1, 0.3), 0.1 / 0.3)
console.log('divide', divide(33.3333, 100), 33.3333 / 100)
console.log('times', times(0.1, 0.1), 0.1 * 0.1)

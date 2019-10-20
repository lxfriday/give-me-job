import { digitLength } from './digitLength'
import { baseNum } from './baseNum'
import { float2Fixed } from './float2Fixed'

export function times(num1: number, num2: number): number {
  const bn = digitLength(num1) + digitLength(num2)
  const intNum1 = float2Fixed(num1)
  const intNum2 = float2Fixed(num2)
  return (intNum1 * intNum2) / Math.pow(10, bn)
}

// 加
export function plus(num1: number, num2: number): number {
  const bn = baseNum(num1, num2)
  // fix：不能使用 num1 * bn，小数与整数相乘可能不准确，需要精确乘 times
  return (times(num1, bn) + times(num2, bn)) / bn
}

// 减
export function minus(num1: number, num2: number): number {
  const bn = baseNum(num1, num2)
  return (times(num1, bn) - times(num2, bn)) / bn
}

export function divide(num1: number, num2: number): number {
  // 浅显易懂的写法
  const bn = baseNum(num1, num2)
  const intNum1 = times(num1, bn)
  const intNum2 = times(num2, bn)
  // 要检查扩大后的数字是否超过了安全边界
  return intNum1 / intNum2

  // 避免把数字扩的太大的写法
  // const num1Changed = float2Fixed(num1)
  // const num2Changed = float2Fixed(num2)
  // return times(num1Changed / num2Changed, Math.pow(10, digitLength(num2) - digitLength(num1)))
}

console.log(plus(0.1, 0.2), 0.1 + 0.2)
console.log(minus(1, 0.9), 1 - 0.9)
console.log(divide(0.1, 0.3), 0.1 / 0.3)
console.log(times(0.1, 0.1), 0.1 * 0.1)

/**
 * 把小数调整为整数
 * @param num
 */
import { digitLength } from './digitLength'
import { strip } from './strip'

export function float2Fixed(num: number) {
  // 1.23456 => 123456
  if (num.toString().indexOf('e') === -1) {
    return Number(num.toString().replace('.', ''))
  }
  // 1.1e-30
  const dLen = digitLength(num)
  // 这个地方需要辅助矫正，num * Math.pow(10, dLen) 小数和整数相乘仍然可能会出现不准的情况
  return dLen > 0 ? strip(num * Math.pow(10, dLen)) : num
}

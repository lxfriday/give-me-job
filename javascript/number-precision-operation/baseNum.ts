/**
 * 将数字转换为整数
 * @param num
 */
import { digitLength } from './digitLength'

export function baseNum(num1: number, num2: number): number {
  return Math.pow(10, Math.max(digitLength(num1), digitLength(num2)))
}

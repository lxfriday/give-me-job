/**
 * 字典序的第K小数字
 * # 440
 */

/**
 * 纵向查找 start 节点下面有多少符合条件的子节点
 * @param start
 * @param n
 */
function getCount(start: number, n: number): number {
  let count: number = 0
  for (let cur = start, next = cur + 1; cur <= n; cur *= 10, next *= 10) count += Math.min(next, n + 1) - cur
  return count
}

export function findKthNumber(n: number, k: number): number {
  let p: number = 1
  let start: number = 1
  while (p < k) {
    const count = getCount(start, n)
    if (p + count > k) {
      start *= 10
      p++
    } else {
      p += count
      start++
    }
  }
  return start
}

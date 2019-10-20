/**
 * 获取小数部分的长度
 */

// 兼容多种类型的表示
// 1.11 或者 1.11e-30 或者 1e-30
export function digitLength(num: number): number {
  // 1.11 -> eSplit: ['1.11']
  // 1.11e-30 -> eSplit: ["1.11", "-30"]
  const eSplit = num.toString().split(/[eE]/)
  // 右边的 `|| ''` 为了防止 1e-30 -> eSplit: ["1", "-30"] 这种
  // 左边 1.11 有两个小数，右边 e 后面有 -30，所以是 2 - (-30) 为 32
  const len = (eSplit[0].split('.')[1] || '').length - Number(eSplit[1] || 0)
  return len > 0 ? len : 0
}

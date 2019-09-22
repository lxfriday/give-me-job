/**
 * 回文数，普通实现
 * #234
 * @link https://leetcode-cn.com/problems/palindrome-linked-list/
 */

/**
 * 转换一次字符串，然后扫描一半的字符串就可以判断结果
 * @param x
 */
export function isPalindrome1(x: number): boolean {
  if (x < 0) return false
  const str = String(x)
  for (let i = 0; i < str.length / 2; i++) {
    if (str[i] !== str[str.length - i - 1]) return false
  }
  return true
}

// 强制转换字符串实现
// 简单，但是不高效
export function isPalindrome2(x: number): boolean {
  const str = String(x)
  return (
    str ===
    str
      .split('')
      .reverse()
      .join('')
  )
}

/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (s === null || p === null) return false

  const sLen = s.length
  const pLen = p.length

  // dp[i][j] 表示长度为 i 和 j 情况下可以匹配
  const dp = new Array(sLen + 1)

  for (let i = 0; i < dp.length; i++) {
    dp[i] = new Array(pLen + 1).fill(false)
  }

  dp[0][0] = true
  for (let j = 2; j < pLen + 1; j++) {
    // s 长度为 0，且 p 最后一个是 *
    if (p[j - 1] === '*') dp[0][j] = dp[0][j - 2]
  }
  // 迭代
  for (let i = 1; i < sLen + 1; i++) {
    for (let j = 1; j < pLen + 1; j++) {
      if (s[i - 1] === p[j - 1] || p[j - 1] === '.') {
        dp[i][j] = dp[i - 1][j - 1]
      } else if (p[j - 1] === '*') {
        // * 使用 0 次，1次，>=2 次时
        if (s[i - 1] === p[j - 2] || p[j - 2] === '.') {
          // 下面几种情况一种符合就可以了
          // 1. * 匹配 0 个，dp[i][j - 2]
          // 2. * 匹配 1 个，dp[i - 1][j - 2]
          // 3. * 匹配 >= 2 个，j 不变，往前进 1
          dp[i][j] = dp[i][j - 2] || dp[i - 1][j - 2] || dp[i - 1][j]
        } else {
          // * 表示使用 0 次时，则 j 往前进2
          dp[i][j] = dp[i][j - 2]
        }
      }
    }
  }

  return dp[sLen][pLen]
}

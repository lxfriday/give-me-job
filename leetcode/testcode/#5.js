/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {
  // !s.length 直接返回空字符串
  if (!s.length) return ''
  let res = s[0]

  const dp = []

  for (let i = s.length - 1; i >= 0; i--) {
    // 二位数组存储 i 值下的对应关系
    dp[i] = []
    for (let j = i; j < s.length; j++) {
      // 没有移动的情形
      if (j === i) dp[i][j] = true
      // 移动为 1
      else if (j - i === 1 && s[i] === s[j]) dp[i][j] = true
      // 移动为 1 以上
      // dp[i][j] 依赖 dp[i + 1][j - 1]
      else if (s[i] === s[j] && dp[i + 1][j - 1]) dp[i][j] = true
      if (dp[i][j] && j - i + 1 > res.length) res = s.slice(i, j + 1)
    }
  }
  return res
}

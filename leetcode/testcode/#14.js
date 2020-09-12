/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix1 = function(strs) {
  if (!strs.length) return ''
  let res = strs[0]
  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < res.length; j++) {
      if (res[j] !== strs[i][j]) {
        res = res.slice(0, j)
      }
    }
  }
  return res
}

var longestCommonPrefix = function(strs) {
  if (!strs.length) return ''
  let res = ''
  let min = strs[0]
  let max = strs[0]
  for (let i = 1; i < strs.length; i++) {
    if (strs[i] > max) {
      max = strs[i]
    }
    if (strs[i] < min) {
      min = strs[i]
    }
  }
  for (let i = 0; i < min.length; i++) {
    if (min[i] !== max[i]) break
    res += min[i]
  }
  return res
}

console.log(longestCommonPrefix(['asdog', 'asracecar', 'ascar']))

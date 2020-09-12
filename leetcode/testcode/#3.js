// var lengthOfLongestSubstring = function(s) {
//   let map = new Map(),
//     max = 0
//   for (let i = 0, j = 0; j < s.length; j++) {
//     if (map.has(s[j])) {
//       i = Math.max(map.get(s[j]) + 1, i)
//     }
//     max = Math.max(max, j - i + 1)
//     map.set(s[j], j)
//   }
//   return max
// }

var lengthOfLongestSubstring = function(s) {
  let map = new Map()
  let max = 0 
  for (let i = 0, j = 0; j < s.length; j++) {
    if (map.has(s[j])) {
      // i 移位
      i = Math.max(i, map.get(s[j]) + 1)
    }
    // 计算新 max
    max = Math.max(max, j - i + 1)
    // 更新 s[j] 在 map 中的下标
    map.set(s[j], j)
  }
  return max
}

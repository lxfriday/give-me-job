// 排列组合问题：BFS、DFS解决
// /**
//  * @param {string} digits
//  * @return {string[]}
//  */
// var letterCombinations = function(digits) {
//   if (!digits.length) return []
//   const n2c = {
//     2: 'abc',
//     3: 'def',
//     4: 'ghi',
//     5: 'jkl',
//     6: 'mno',
//     7: 'pqrs',
//     8: 'tuv',
//     9: 'wxyz',
//   }
//   // bfs
//   const queue = ['']
//   for (let i = 0; i < digits.length; i++) {
//     const qLen = queue.length
//     for (let j = 0; j < qLen; j++) {
//       // 旧结果头部出列
//       const shift = queue.shift()

//       const chars = n2c[digits[i]]
//       for (const char of chars) {
//         // 新结果尾部入列
//         queue.push(shift + char)
//       }
//     }
//   }
//   return
// }

/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  if (!digits.length) return []
  const res = []
  const n2c = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz',
  }

  function dfs(i, str) {
    if (i > digits.length - 1) {
      res.push(str)
      return
    }
    const chars = n2c[digits[i]]
    for (const char of chars) {
      dfs(i + 1, str + char)
    }
  }
  dfs(0, '')
  return res
}
console.log(letterCombinations('23'))

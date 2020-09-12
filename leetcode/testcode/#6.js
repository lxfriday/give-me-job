/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
  if (s.length <= numRows || numRows === 1) return s
  if (s.length === 1) return s

  let res = ''
  const tmpArr = []
  let down = true // 往下的指示
  let stage = 0

  for (let i = 0; i < s.length; i++) {
    if (!tmpArr[stage]) {
      tmpArr[stage] = []
    }
    tmpArr[stage].push(s[i])
    if (down) {
      if (stage + 1 < numRows) {
        stage++
      } else {
        stage--
        down = false
      }
    } else {
      if (stage === 0) {
        stage++
        down = true
      } else {
        stage--
      }
    }
  }
  console.log(tmpArr)

  for (const v of tmpArr) {
    for (const vv of v) {
      res += vv
    }
  }

  return res
}

console.log(convert('ABCDEFG', 2))

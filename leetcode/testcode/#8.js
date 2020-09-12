/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
  let s = str.trim()
  let isZ = true
  let res = 0
  if (s[0] === '-') {
    isZ = false
    s = s.slice(1, s.length)
  } else if (s[0] === '+') {
    s = s.slice(1, s.length)
  }

  if (isNaN(Number(s[0]))) return res
  for (const num of s) {
    if (!isNaN(Number(num)) && num !== ' ') {
      res = res * 10 + Number(num)
    } else {
      break
    }
  }

  if (isZ) {
    return res >= 2 ** 31 ? 2 ** 31 - 1 : res
  } else {
    return res > 2 ** 31 ? -(2 ** 31) : -res
  }
}

console.log(myAtoi('42'))
console.log(myAtoi('   -42'))
console.log(myAtoi('4193 with words'))
console.log(myAtoi('words and 987'))
console.log(myAtoi('-91283472332'))

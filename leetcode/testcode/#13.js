/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const chars = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let res = 0
  for (let i = 0; i < chars.length; i++) {
    while (s.indexOf(chars[i]) === 0) {
      res += nums[i]
      s = s.slice(chars[i].length)
    }
  }
  return res
}
console.log(romanToInt('MCMXCIV'))

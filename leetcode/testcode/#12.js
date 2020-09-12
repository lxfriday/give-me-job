/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
  const chars = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I']
  const nums = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
  let res = ''
  for (let i = 0; i < nums.length; i++) {
    while (num >= nums[i]) {
      res += chars[i]
      num -= nums[i]
    }
  }
  return res
}
console.log(intToRoman(58))

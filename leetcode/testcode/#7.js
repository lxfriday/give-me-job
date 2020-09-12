/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  const num = parseInt(
    Math.abs(x)
      .toString()
      .split('')
      .reverse()
      .join(''),
    10
  )
  if (x < 0) {
    return num > 2 ** 31 ? 0 : -num
  } else {
    return num >= 2 ** 31 ? 0 : num
  }
}

console.log(reverse(123))

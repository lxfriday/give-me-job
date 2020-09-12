const { join } = require('path')

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  return (
    x
      .toString()
      .split('')
      .reverse()
      .join('') === x.toString()
  )
}

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let max = 0
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      let x = j - i
      let y = Math.min(height[i], height[j])
      max = Math.max(x * y, max)
    }
  }
  return max
}

/**
 * 思路：盛最多水，要保证左右高度相对最高，而面积是宽度乘左右两边中比较小的高度
 * 通过暴力法的话，我们可以固定左边的高度，遍历右边的高度，来不停获取面积，然后取得最大面积
 *
 * 优化：但有个条件可供优化，如果左边比右边高度低，你再去移动右边往中间走是没有意义的，
 * 这时候使用的是左边的高度，右边往中间走，宽度就变短了，所以肯定不行。
 * 因此我们需要哪边低的，哪边往中间走。
 *
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  let i = 0
  let j = height.length - 1

  let max = 0
  while (i < j) {
    let minH = Math.min(height[i], height[j])

    let area = (j - i) * minH

    max = Math.max(area, max)

    height[i] > height[j] ? j-- : i++
  }

  return max
}

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]))

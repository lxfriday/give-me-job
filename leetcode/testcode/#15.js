/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  nums.sort((a, b) => a - b)
  let res = []
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) break
    if (i > 0 && nums[i] === nums[i - 1]) continue
    let L = i + 1
    let R = nums.length - 1
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R]
      if (sum === 0) {
        res.push([nums[i], nums[L], nums[R]])
        while (L < R && nums[L] === nums[L + 1]) {
          L++
        }
        while (L < R && nums[R] === nums[R - 1]) {
          R--
        }
        L++
        R--
      } else if (sum < 0) {
        L++
      } else if (sum > 0) {
        R--
      }
    }
  }
  return res
}
console.log(threeSum([-1, 0, 1, 2, -1, -4]))

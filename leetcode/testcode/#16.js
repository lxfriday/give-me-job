/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
  nums.sort((a, b) => a - b)
  let res = nums[0] + nums[1] + nums[nums.length - 1]
  for (let i = 0; i < nums.length - 2; i++) {
    let L = i + 1
    let R = nums.length - 1
    while (L < R) {
      const sum = nums[i] + nums[L] + nums[R]
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum
      }
      sum > target ? R-- : L++
    }
  }
  return res
}

console.log(threeSumClosest([-1, 2, 1, -4], 1))

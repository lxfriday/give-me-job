/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
  if (nums.length < 4) return []
  let res = []
  const len = nums.length
  nums.sort((a, b) => a - b)
  for (let i = 0; i < len - 3; i++) {
    // 去重
    if (i > 0 && nums[i] === nums[i - 1]) continue
    // 优化
    // if (nums[i] > target) break // 这个优化不对，负数相加比 target 更小
    // if (nums[i] + nums[i + 1] + nums[i + 2] + nums[i + 3] > target) break
    // if (nums[i] + nums[len - 1] + nums[len - 2] + nums[len - 3] < target) continue

    for (let j = i + 1; j < len - 2; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue
      let L = j + 1
      let R = len - 1
      while (L < R) {
        const sum = nums[i] + nums[L] + nums[j] + nums[R]
        if (sum === target) {
          res.push([nums[i], nums[j], nums[L], nums[R]])
          while (L < R && nums[L] === nums[L + 1]) {
            L++
          }
          while (L < R && nums[R] === nums[R - 1]) {
            R--
          }
          L++
          R--
        } else {
          sum > target ? R-- : L++
        }
      }
    }
  }
  return res
}

console.log(fourSum([1, -2, -5, -4, -3, 3, 3, 5], -11))

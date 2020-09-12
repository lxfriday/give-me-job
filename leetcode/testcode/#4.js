/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
  const nums = []
  let i = 0
  let j = 0
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] <= nums2[j]) {
      nums.push(nums1[i++])
    } else {
      nums.push(nums2[j++])
    }
  }

  while (i < nums1.length) {
    nums.push(nums1[i++])
  }
  while (j < nums2.length) {
    nums.push(nums2[j++])
  }

  const len = nums.length
  return len % 2 === 1 ? nums[Math.floor(len / 2)] : (nums[len / 2] + nums[len / 2 - 1]) / 2
}

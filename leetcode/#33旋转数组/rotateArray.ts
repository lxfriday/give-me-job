/**
 * @link https://leetcode-cn.com/problems/search-in-rotated-sorted-array/solution/ji-jian-solution-by-lukelee/
 */
type nt = number[]

export function rotateArray1(arr: nt, target: number) {
  let lo = 0
  let hi = arr.length - 1
  while (lo < hi) {
    let mid = lo + ((hi - lo) >> 1)
    if (Number(arr[0] > target) ^ Number(arr[0] > arr[mid]) ^ Number(target > arr[mid])) {
      lo = mid + 1
    } else hi = mid
  }
  return lo === hi && arr[lo] === target ? lo : -1
}

export function rotateArray(arr: nt, target: number, lo?: number, hi?: number): number {
  const low = lo === undefined ? 0 : lo
  const high = hi === undefined ? arr.length - 1 : hi
  const mid = low + ((high - low) >> 1)
  if (low > high) return -1
  if (arr[mid] === target) return mid
  else if (arr[mid] > arr[0]) {
    // arr[mid] > target >= arr[0]
    if (arr[mid] > target && target >= arr[0]) {
      return rotateArray(arr, target, low, mid - 1)
    } else {
      return rotateArray(arr, target, mid + 1, high)
    }
  } else {
    // arr[mid] < arr[0]
    if (arr[mid] < target && target <= arr[high]) return rotateArray(arr, target, mid + 1, high)
    return rotateArray(arr, target, low, mid - 1)
  }
}

const arr = [3, 1]

console.log(rotateArray(arr, 1))

// Number(arr[0] > arr[mid]) 表示 mid 左侧被拆开了
// Number(arr[0] > target)

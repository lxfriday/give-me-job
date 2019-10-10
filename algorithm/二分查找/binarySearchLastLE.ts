/**
 * 搜索最后一个小于等于 value
 */

type nt = number[]

export function binarySearch(arr: nt, value: number) {
  let low = 0
  let high = arr.length - 1

  while (low <= high) {
    const mid = low + ((high - low) >> 1)
    if (arr[mid] > value) {
      high = mid - 1
    } else {
      if (arr[mid + 1] > value) return mid
      else low = mid + 1
    }
  }
  return -1
}

const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

console.log('res => ', binarySearch(arr, 15), arr.indexOf(15)) // 14 13

arr.splice(13, 2)

console.log('res => ', binarySearch(arr, 15), arr.indexOf(15)) // 12 -1

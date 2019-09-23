/**
 * 选择排序
 * 选择最小的，然后和当前轮的值替换
 * 原地排序，不稳定(最大值在第一个、最小值在最后一个，会让最大值排在最后，有相同的最大值时，则会不稳定)
 * 时间复杂度：最好、最坏、平均都是 O(n2)
 */

function swap(arr: number[], a: number, b: number) {
  const tmp: number = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

export function selectionSort(arr: number[]) {
  const length = arr.length
  if (length <= 1) return arr
  for (let i = 0; i < length; i++) {
    let min = i
    for (let j = i + 1; j < length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    swap(arr, i, min)
  }
  return arr
}

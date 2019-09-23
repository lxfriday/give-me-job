/**
 * 快排
 * 非稳定，原地排序
 * 时间复杂度：最好 O(nlogn)、最差 O(n2)、平均 O(nlogn)
 */

function swap(arr: number[], a: number, b: number) {
  const tmp: number = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

function partition(arr: number[], left: number, right: number): number {
  let pivot: number = left // 默认从最左边开始，有优化空间
  let index = pivot + 1
  for (let i = index; i <= right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index)
      index++
    }
  }
  swap(arr, pivot, index - 1)
  return index - 1
}

export function quickSort(arr: number[], l?: number, r?: number) {
  const len = arr.length
  const left: number = typeof l === 'number' ? l : 0
  const right: number = typeof r === 'number' ? r : len - 1
  let partitionIndex = 0
  if (left < right) {
    partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex - 1)
    quickSort(arr, partitionIndex + 1, right)
  }
  return arr
}

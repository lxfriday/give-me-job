/**
 * 插入排序
 * 属于搬运排序，对于有利的有序性，可以加快排序速度
 * 原地排序，稳定
 * 时间复杂度：最好 O(n)、最坏 O(n2)、平均 O(n2)
 */

export function insertionSort(arr: number[]) {
  const length = arr.length
  if (length <= 1) return arr
  for (let i = 1; i < length; i++) {
    const cur = arr[i]
    let j = i - 1
    for (; j >= 0; j--) {
      if (arr[j] > cur) {
        arr[j + 1] = arr[j]
      } else {
        break
      }
    }
    arr[j + 1] = cur
  }

  return arr
}

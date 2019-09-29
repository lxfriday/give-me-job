/**
 * 插入排序
 * 属于搬运排序，对于有利的有序性，可以加快排序速度
 * 原地排序，稳定
 * 时间复杂度：最好 O(n)、最坏 O(n2)、平均 O(n2)
 */

function swap(arr: number[], a: number, b: number) {
  const tmp: number = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

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

/**
 * 插排的快速实现，依赖 Array.prototype.splice
 *@link https://zh.wikipedia.org/wiki/%E6%8F%92%E5%85%A5%E6%8E%92%E5%BA%8F
 */
export function insertionSort2(arr: number[]) {
  const len = arr.length
  for (let i = 1; i < len; i++) {
    for (let j = i - 1; j >= 0; j--) {
      if (arr[j] > arr[j + 1]) {
        // 这里是更改两个元素，所以比上面的方法效率低
        swap(arr, j + 1, j)
      } else {
        break
      }
    }
  }
  return arr
}

// console.log(insertionSort2([2, 3, 4, 1, 9, 5, 7, 4, 55, 2, 12]))

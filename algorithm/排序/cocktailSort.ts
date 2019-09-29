/**
 * 鸡尾酒排序
 * 它是冒泡排序的一种变体，性能比冒泡略好
 * 双路冒泡，外层循环次数减半
 */
function swap(arr: number[], a: number, b: number) {
  const tmp: number = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

export function cocktailSort(arr: number[]) {
  const len = arr.length
  for (let i = 0; i < len / 2; i++) {
    let start: number = 0
    let end: number = len - 1
    for (let j = start; j < end; j++) {
      if (arr[j] > arr[j + 1]) swap(arr, j, j + 1)
    }
    end--
    for (let j = end; j > start; j--) {
      if (arr[j] < arr[j - 1]) swap(arr, j - 1, j)
    }
    start++
  }
  return arr
}

// console.log(cocktailSort([2, 3, 4, 1, -1, -2, 55, 66, 44, 33, 22, 11]))

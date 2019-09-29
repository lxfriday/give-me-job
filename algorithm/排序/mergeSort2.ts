/**
 * 归并排序：迭代实现，自底向上
 */

export function mergeSort2(arr: number[]): number[] {
  const len = arr.length
  for (let sz = 1; sz < len; sz *= 2) {
    for (let i = 0; i < len - sz; i += 2 * sz) {
      const start = i
      const mid = i + sz - 1
      const end = Math.min(i + 2 * sz - 1, len - 1)
      merge(arr, start, mid, end)
    }
  }
  return arr
}

function merge(arr: number[], start: number, mid: number, end: number) {
  let i = start
  let j = mid + 1
  const tmp = []
  let k = start
  for (let w = start; w <= end; w++) {
    tmp[w] = arr[w]
  }
  while (i < mid + 1 && j < end + 1) {
    if (tmp[i] < tmp[j]) arr[k++] = tmp[i++]
    else arr[k++] = tmp[j++]
  }
  while (i < mid + 1) arr[k++] = tmp[i++]
  while (j < end + 1) arr[k++] = tmp[j++]
}

// console.log(mergeSort2([2, 3, 4, 1, -1, -2, 55, 66, 44, 33, 22, 11]))

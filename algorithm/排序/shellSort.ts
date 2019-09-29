/**
 * 希尔排序
 * 不稳定，原地排序
 */
// 按区间拆分
export function shellSort(arr: number[]) {
  const length: number = arr.length
  let i, j
  // 调整 gap
  for (let gap = length >> 1; gap > 0; gap >>= 1) {
    // 按区间插排
    for (i = gap; i < length; i++) {
      let temp: number = arr[i]
      // 从当前位置往左按区间扫描
      for (j = i - gap; j >= 0 && arr[j] > temp; j -= gap) {
        arr[j + gap] = arr[j]
      }
      arr[j + gap] = temp
    }
  }
  return arr
}

export function shellSort2(arr: number[]) {
  const length: number = arr.length
  let i, j
  // 调整 gap
  for (let gap = length >> 1; gap > 0; gap >>= 1) {
    // 按区间插排
    for (i = gap; i < length; i++) {
      // 从当前位置往左按区间扫描
      for (j = i - gap; j >= 0 && arr[j] > arr[j + gap]; j -= gap) {
        // 这里是更改两个元素，所以比上面的方法效率低
        swap(arr, j, j + gap)
      }
    }
  }
  return arr
}

function swap(arr: number[], a: number, b: number) {
  const tmp: number = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

// console.log(shellSort2([2, 3, 4, 1, 9, 5, 7, 4, 55, 2, 12]))

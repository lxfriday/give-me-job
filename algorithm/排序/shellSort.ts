/**
 * 希尔排序
 * 不稳定，原地排序
 * 时间复杂度：最好 O(n)
 *
 * 效果图 https://zh.wikipedia.org/wiki/File:Sorting_shellsort_anim.gif#/media/File:Sorting_shellsort_anim.gif
 * wikipedia: https://zh.wikipedia.org/wiki/%E5%B8%8C%E5%B0%94%E6%8E%92%E5%BA%8F#%E6%AD%B7%E5%8F%B2
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

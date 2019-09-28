/**
 * 基数排序
 * 使用 LSD 进行排序
 */

type at = number[]

export function radixSort(arr: at): at {
  const len = arr.length
  const max = Math.max(...arr)
  let buckets: at[] = []
  let digit = `${max}`.length
  let start = 1
  let res: at = arr.slice()
  while (digit > 0) {
    start *= 10
    for (let i = 0; i < len; i++) {
      const j = res[i] % start
      if (buckets[j] === void 0) {
        buckets[j] = []
      }
      buckets[j].push(res[i])
    }
    res = []
    for (let j = 0; j < buckets.length; j++) {
      buckets[j] && (res = res.concat(buckets[j]))
    }
    buckets = []
    digit--
  }
  return res
}

// console.log(radixSort([2, 3, 1, 5, 2, 7, 555, 1, 20, 0, 12]))

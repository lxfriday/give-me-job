/**
 * 桶排序
 * 桶排序是计数排序的升级版。它利用了函数的映射关系，高效与否的关键就在于这个映射函数的确定。为了使桶排序更加高效，我们需要做到这两点：
 *   1. 在额外空间充足的情况下，尽量增大桶的数量
 *   2. 用的映射函数能够将输入的 N 个数据均匀的分配到 K 个桶中
 * 同时，对于桶中元素的排序，选择何种比较排序算法对于性能的影响至关重要
 *
 * 什么时候最快？
 *   当输入的数据可以均匀的分配到每一个桶中。
 * 什么时候最慢？
 *   当输入的数据被分配到了同一个桶中。
 */
type at = number[]

function swap(arr: number[], a: number, b: number) {
  const tmp: number = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

export function bucketSort(arr: at, size: number = 5) {
  const len = arr.length
  const max = Math.max(...arr)
  const min = Math.min(...arr)
  const bucketSize = Math.floor((max - min) / size) + 1
  const bucket: at[] = []
  const res: at = []

  for (let i = 0; i < len; i++) {
    const j = Math.floor((arr[i] - min) / bucketSize)
    !bucket[j] && (bucket[j] = [])
    bucket[j].push(arr[i])
    let l = bucket[j].length
    while (l > 0) {
      bucket[l] < bucket[l - 1] && swap(arr, l, l - 1)
      l--
    }
  }

  for (let i = 0; i < bucket.length; i++) {
    console.log(bucket[i])

    const l = bucket[i] ? bucket[i].length : 0
    for (let j = 0; j < l; j++) {
      res.push(bucket[i][j])
    }
  }
  return res
}
console.log(bucketSort([2, 3, 1, 5, 2, 7, 555, 1, 20, 0, 12]))

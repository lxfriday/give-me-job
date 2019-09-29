/**
 * 快排
 * 左右指针法
 * @link https://www.jianshu.com/p/6951551c7ecd
 * 选取基准值，开始本轮循环；
 * 从数组右侧开始递减比较，发现有值小于基准值，停下记录该下标；
 * 从数组左侧开始递增比较，发现有值大于基准值，停下记录该下标；
 * 将两个下标的值进行交换；
 * 接着循环重复第2~4步，直到左右两指针相遇，表示这一轮的内循环比较结束；
 * 此时左、右指针指向相同的值，将左、右指针指向的值与基准值交换（基准值归位），就完成了本轮的排序；
 * 每轮排序完成后，基准值左边的都是小于它的，而右边都是大于等于它的，接着以基准值为分割点，将两个子集数据源从第1步进行递归操作；
 * 通俗点说，就是一个指针从右侧依次递减，一个指针从左侧依次递增，当发现符合条件的情况时，交换两个指针指向的值，然后以基准值为分割点，将本次数据源分为两个小的数组，依次递归循环该操作。
 */

type at = number[]

function swap(arr: number[], a: number, b: number) {
  const tmp: number = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

function partition(arr: number[], left: number, right: number): number {
  let l: number = left // 默认从最左边开始，有优化空间
  let r: number = right
  const target: number = arr[left]

  while (l < r) {
    while (arr[r] >= target && r > l) {
      r--
    }
    while (arr[l] <= target && l < r) {
      l++
    }
    swap(arr, l, r)
  }

  if (l !== left) {
    swap(arr, l, left)
  }

  return l
}

export function quickSort2(arr: at, l?: number, r?: number) {
  const len = arr.length
  const left: number = typeof l === 'number' ? l : 0
  const right: number = typeof r === 'number' ? r : len - 1
  let partitionIndex = 0
  if (left < right) {
    partitionIndex = partition(arr, left, right)
    quickSort2(arr, left, partitionIndex - 1)
    quickSort2(arr, partitionIndex + 1, right)
  }
  return arr
}

// console.log(quickSort2([2, 3, 4, 1, 9, 5, 7, 4, 55, 2, 12]))

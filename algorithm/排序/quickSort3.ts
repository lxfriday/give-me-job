/**
 * 三路快排(*)
 * < = > 三路
 * @link https://www.jianshu.com/p/c61d1e82c44b
 */
type at = number[]

function swap(arr: number[], a: number, b: number) {
  const tmp: number = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

function partion(arr: at, l: number, r: number) {
  // 基准数选取区间的第一个值
  let v = arr[l]
  let lt = l
  let gt = r + 1

  // 下面的循环不好理解
  // i 和 gt 都在变化，gt 向左移动可以不影响 i，lt 增长会把等于v的项转移到 i，所以需要 i++
  for (let i = l + 1; i < gt; ) {
    if (arr[i] === v) {
      // lt 和 i 在这里拉开差距
      i++
    } else if (arr[i] > v) {
      swap(arr, gt - 1, i)
      gt--
    } else {
      swap(arr, lt + 1, i)
      lt++
      i++
    }
  }

  swap(arr, l, lt) // arr[lt] === v
  lt--
  return { lt, gt }
}

export function quickSort3(arr: at, l?: number, r?: number) {
  const len = arr.length
  const left: number = typeof l === 'number' ? l : 0
  const right: number = typeof r === 'number' ? r : len - 1
  if (left >= right) return
  let { lt, gt } = partion(arr, left, right)
  quickSort3(arr, l, lt)
  quickSort3(arr, gt, r)
  return arr
}

console.log(quickSort3([2, 3, 4, 1, 9, 5, 7, 4, 55, 2, 12, 1000]))

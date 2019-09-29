/**
 * 归并排序
 * 递归实现（自顶向下）
 */
export function mergeSort(arr: number[]): number[] {
  const length = arr.length
  if (length < 2) return arr
  const m: number = Math.floor(length / 2)
  const left: number[] = arr.slice(0, m)
  const right: number[] = arr.slice(m)
  return merge(mergeSort(left), mergeSort(right))
}

/**
 * 对两个有序数组合并，直接利用 shift 出数组
 */
function merge(lArr: number[], rArr: number[]) {
  const result: number[] = []
  while (lArr.length && rArr.length) {
    if (lArr[0] < rArr[0]) {
      result.push(<number>lArr.shift())
    } else {
      result.push(<number>rArr.shift())
    }
  }
  while (lArr.length) {
    result.push(<number>lArr.shift())
  }
  while (rArr.length) {
    result.push(<number>rArr.shift())
  }
  return result
}

/**
 * 对两个有序数组合并，利用下标游标实现
 */
function merge2(lArr: number[], rArr: number[]) {
  const result: number[] = []
  let lLen = lArr.length
  let rLen = rArr.length
  let i = 0
  let j = 0
  while (i < lLen && j < rLen) {
    if (lArr[i] < rArr[j]) result.push(lArr[i++])
    else result.push(rArr[j++])
  }

  while (i < lLen) result.push(lArr[i++])
  while (j < rLen) result.push(rArr[j++])

  return result
}

// console.log(mergeSort([2, 3, 4, 1, -1, -2, 55, 66, 44, 33, 22, 11]))

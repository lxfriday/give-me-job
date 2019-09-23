export function mergeSort(arr: number[]): number[] {
  const length = arr.length
  if (length < 2) return arr
  const m: number = Math.floor(length / 2)
  const left: number[] = arr.slice(0, m)
  const right: number[] = arr.slice(m)
  return merge(mergeSort(left), mergeSort(right))
}

/**
 * 对两个有序数组合并
 * @param lArr
 * @param rArr
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

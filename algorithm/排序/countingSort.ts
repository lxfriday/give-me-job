/**
 * 计数排序
 * 非对比排序，速度神快，但资源消耗也大
 * 计数排序的核心在于将输入的数据值转化为键存储在额外开辟的数组空间中。作为一种线性时间复杂度的排序，计数排序要求输入的数据必须是有确定范围的整数。
 *
 */

type at = number[]

export function countingSort(arr: at) {
  const bucket: at = []
  const len = arr.length
  // 数组下标的游标
  let sortIndex: number = 0

  for (let i = 0; i < len; i++) {
    if (bucket[arr[i]]) {
      bucket[arr[i]]++
    } else {
      // 数组的下标不能为负数，所以计数排序限制只能排序自然数
      bucket[arr[i]] = 1
    }
  }

  for (let j = 0; j < bucket.length; j++) {
    while (bucket[j]) {
      arr[sortIndex++] = j
      bucket[j]--
    }
  }
  return arr
}

// console.log(countingSort([2, 3, 4, 1, 9, 5, 7, 4, 55, 2, 12]))

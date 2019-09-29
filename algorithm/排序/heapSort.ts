/**
 * @link https://zh.wikipedia.org/wiki/%E5%A0%86%E6%8E%92%E5%BA%8F#JavaScript
 * @link https://sort.hust.cc/7.heapsort
 * 堆排序
 * 原理：把数组先构建成大顶堆，再将 arr[0] （堆顶节点）与 `len - 1`互换，然后重建大顶堆，
 * 再将 `len - 2` 互换，然后重复上述过程，就完成了重排过程
 * 原地排序，时间复杂度：最好 O(nlogn)、最坏 O(nlogn)、平均 O(nlogn)
 *
 * 通常堆是通过一维数组来实现的。在数组起始位置为0的情形中：
 * 父节点i的左子节点在位置 2 * i + 1
 * 父节点i的右子节点在位置 2 * i + 2
 * 子节点i的父节点在位置 floor((i -1) / 2)
 */

type at = number[]

function swap(arr: number[], a: number, b: number) {
  const tmp: number = arr[a]
  arr[a] = arr[b]
  arr[b] = tmp
}

function heapifyMax(arr: at, i: number, len: number) {
  const left = 2 * i + 1
  const right = 2 * i + 2
  let max = i

  if (left < len && arr[left] > arr[max]) {
    max = left
  }

  if (right < len && arr[right] > arr[max]) {
    max = right
  }

  if (max !== i) {
    swap(arr, max, i)
    heapifyMax(arr, max, len)
  }
}

function heapifyMin(arr: at, i: number, len: number) {
  const left = 2 * i + 1
  const right = 2 * i + 2
  let min = i

  if (left < len && arr[left] < arr[min]) {
    min = left
  }

  if (right < len && arr[right] < arr[min]) {
    min = right
  }

  if (min !== i) {
    swap(arr, min, i)
    heapifyMin(arr, min, len)
  }
}

// 构建大顶堆
function buildMaxHeap(arr: at) {
  const len = arr.length
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapifyMax(arr, i, len)
  }
}

// 构建小顶堆
function buildMinHeap(arr: at) {
  const len = arr.length
  for (let i = Math.floor(len / 2); i >= 0; i--) {
    heapifyMin(arr, i, len)
  }
}

// asc 为 true 表示从小到大，false 为从大到小
export function heapSort(arr: at, asc: boolean = true) {
  if (asc) {
    buildMaxHeap(arr)
    const len = arr.length
    for (let i = len - 1; i > 0; i--) {
      swap(arr, 0, i)
      heapifyMax(arr, 0, i)
    }
  } else {
    buildMinHeap(arr)
    const len = arr.length
    for (let i = len - 1; i > 0; i--) {
      swap(arr, 0, i)
      heapifyMin(arr, 0, i)
    }
  }
  return arr
}

// console.log(heapSort([2, 3, 4, 1, 9, 5, 7, 4, 55, 2, 12], false))

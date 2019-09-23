import { mergeSort } from './mergeSort'
import { insertionSort } from './insertionSort'
import { selectionSort } from './selectionSort'
import { bubbleSort } from './bubbleSort'

const arr = []
for (let i = 0; i < 300000; i++) {
  arr.push(Math.floor(Math.random() * 10000))
}

console.time('mergeSort')
mergeSort(arr.slice())
console.timeEnd('mergeSort')

// console.time('insertionSort')
// insertionSort(arr.slice())
// console.timeEnd('insertionSort')

// console.time('selectionSort')
// selectionSort(arr.slice())
// console.timeEnd('selectionSort')

// console.time('bubbleSort')
// bubbleSort(arr.slice())
// console.timeEnd('bubbleSort')

// 排序速度成倍数
// mergeSort: 35.771ms
// insertionSort: 183.582ms
// selectionSort: 492.173ms
// bubbleSort: 1092.970ms

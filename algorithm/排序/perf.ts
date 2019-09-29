import { mergeSort as mergeSortRecurse } from './mergeSort' // 递归实现，自顶向下
import { mergeSort2 as mergeSortIteration } from './mergeSort2' // 迭代实现，自底向上
import { insertionSort, insertionSort2 } from './insertionSort'
import { selectionSort } from './selectionSort'
import { bubbleSort } from './bubbleSort'
import { heapSort } from './heapSort'
import { shellSort, shellSort2 } from './shellSort'
import { quickSort } from './quickSort'
import { quickSort2 } from './quickSort2'
import { countingSort } from './countingSort'
import { radixSort } from './radixSort'
import { bucketSort } from './bucketSort'
import { cocktailSort } from './cocktailSort'

const arr = []
for (let i = 0; i < 1000; i++) {
  arr.push(Math.floor(Math.random() * 10000))
}

console.time('array.sort')
arr.slice().sort((a, b) => a - b)
console.timeEnd('array.sort')

console.time('countingSort -> O(n + k)')
countingSort(arr.slice())
console.timeEnd('countingSort -> O(n + k)')

console.time('radixSort -> O(n + k)')
radixSort(arr.slice())
console.timeEnd('radixSort -> O(n + k)')

console.time('bucketSort -> O(n + k)')
bucketSort(arr.slice())
console.timeEnd('bucketSort -> O(n + k)')

console.time('quickSort -> O(nlogn)')
quickSort(arr.slice())
console.timeEnd('quickSort -> O(nlogn)')

console.time('quickSort2 -> O(nlogn)')
quickSort2(arr.slice())
console.timeEnd('quickSort2 -> O(nlogn)')

console.time('shellSort -> O(nlogn)')
shellSort(arr.slice())
console.timeEnd('shellSort -> O(nlogn)')

console.time('shellSort2 -> O(nlogn)')
shellSort2(arr.slice())
console.timeEnd('shellSort2 -> O(nlogn)')

console.time('heapSort -> O(nlogn)')
heapSort(arr.slice())
console.timeEnd('heapSort -> O(nlogn)')

console.time('mergeSortRecurse -> O(nlogn)')
mergeSortRecurse(arr.slice())
console.timeEnd('mergeSortRecurse -> O(nlogn)')

console.time('mergeSortIteration -> O(nlogn)')
mergeSortIteration(arr.slice())
console.timeEnd('mergeSortIteration -> O(nlogn)')

console.time('insertionSort -> O(n**2)')
insertionSort(arr.slice())
console.timeEnd('insertionSort -> O(n**2)')

console.time('insertionSort2 -> O(n**2)')
insertionSort2(arr.slice())
console.timeEnd('insertionSort2 -> O(n**2)')

console.time('selectionSort -> O(n**2)')
selectionSort(arr.slice())
console.timeEnd('selectionSort -> O(n**2)')

console.time('cocktailSort -> O(n**2)')
cocktailSort(arr.slice())
console.timeEnd('cocktailSort -> O(n**2)')

console.time('bubbleSort -> O(n**2)')
bubbleSort(arr.slice())
console.timeEnd('bubbleSort -> O(n**2)')

// 排序速度成倍数

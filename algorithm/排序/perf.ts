import { mergeSort as mergeSortRecurse } from './mergeSort' // 递归实现，自顶向下
import { mergeSort2 as mergeSortIteration } from './mergeSort2' // 迭代实现，自底向上
import { insertionSort, insertionSort2 } from './insertionSort'
import { selectionSort } from './selectionSort'
import { bubbleSort } from './bubbleSort'
import { heapSort } from './heapSort'
import { shellSort, shellSort2 } from './shellSort'
import { quickSort } from './quickSort'
import { quickSort2 } from './quickSort2'
import { quickSort3 } from './quickSort3'
import { countingSort } from './countingSort'
import { radixSort } from './radixSort'
import { bucketSort } from './bucketSort'
import { cocktailSort } from './cocktailSort'

const arr = []
for (let i = 0; i < 100000; i++) {
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

console.time('quickSort3 -> O(nlogn)')
quickSort3(arr.slice())
console.timeEnd('quickSort3 -> O(nlogn)')

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
// array.sort: 131.561ms
// countingSort -> O(n + k): 30.686ms
// radixSort -> O(n + k): 4662.068ms
// bucketSort -> O(n + k): 4011.308ms
// quickSort -> O(nlogn): 22.482ms
// quickSort2 -> O(nlogn): 22.722ms
// quickSort3 -> O(nlogn): 25.818ms
// shellSort -> O(nlogn): 31.158ms
// shellSort2 -> O(nlogn): 34.330ms
// heapSort -> O(nlogn): 42.209ms
// mergeSortRecurse -> O(nlogn): 187.263ms
// mergeSortIteration -> O(nlogn): 540.492ms
// insertionSort -> O(n**2): 3706.632ms
// insertionSort2 -> O(n**2): 4121.403ms
// selectionSort -> O(n**2): 8454.402ms
// cocktailSort -> O(n**2): 25613.020ms
// bubbleSort -> O(n**2): 23078.864ms

// array.sort: 115.794ms
// countingSort -> O(n + k): 15.221ms
// radixSort -> O(n + k): 4499.153ms
// bucketSort -> O(n + k): 4110.335ms
// quickSort -> O(nlogn): 20.354ms
// quickSort2 -> O(nlogn): 24.653ms
// quickSort3 -> O(nlogn): 24.979ms
// shellSort -> O(nlogn): 30.827ms
// shellSort2 -> O(nlogn): 33.478ms
// heapSort -> O(nlogn): 40.442ms
// mergeSortRecurse -> O(nlogn): 174.787ms
// mergeSortIteration -> O(nlogn): 540.217ms
// insertionSort -> O(n**2): 3454.316ms
// insertionSort2 -> O(n**2): 4387.812ms
// selectionSort -> O(n**2): 12488.704ms
// cocktailSort -> O(n**2): 27563.620ms
// bubbleSort -> O(n**2): 22774.625ms

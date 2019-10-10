type nt = number[]

export function binarySearch(arr: nt, value: number) {
  return bSearchInternally(arr, value, 0, arr.length - 1)
}

function bSearchInternally(arr: nt, value: number, low: number, high: number): number {
  if (low > high) return -1
  const mid = low + ((high - low) >> 1)

  if (arr[mid] === value) return mid
  else if (arr[mid] < value) {
    return bSearchInternally(arr, value, mid + 1, high)
  } else {
    return bSearchInternally(arr, value, low, mid - 1)
  }
}

// const arr = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]

// console.log('res => ', binarySearch(arr, 15), arr.indexOf(15))
// console.log(count)

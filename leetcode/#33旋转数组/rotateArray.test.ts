import { rotateArray } from './rotateArray'

const arr = [3, 4, 5, 6, 7, 0, 1, 2]

test('#33 旋转数组', () => {
  expect(rotateArray(arr, arr[0])).toBe(0)
  expect(rotateArray(arr, arr[1])).toBe(1)
  expect(rotateArray(arr, arr[2])).toBe(2)
  expect(rotateArray(arr, arr[3])).toBe(3)
  expect(rotateArray(arr, arr[4])).toBe(4)
  expect(rotateArray(arr, arr[5])).toBe(5)
  expect(rotateArray(arr, arr[6])).toBe(6)
  expect(rotateArray(arr, arr[7])).toBe(7)
})

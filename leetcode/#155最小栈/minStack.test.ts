import { MinStack } from './minStack'
test('#155 最小栈', () => {
  // -2  0   -3
  const minStack = new MinStack()
  minStack.push(-2)
  minStack.push(0)
  minStack.push(-3)
  expect(minStack.getMin()).toBe(-3)
  minStack.pop()
  expect(minStack.top()).toBe(0)
  expect(minStack.getMin()).toBe(-2)
  minStack.pop()
  expect(minStack.getMin()).toBe(-2)
  expect(minStack.top()).toBe(-2)
})

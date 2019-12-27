/**
 * object instanceof constructor
 * @link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/instanceof
 */

function simulateInstanceOf(left, right) {
  if (right === null || right === undefined) {
    throw new TypeError(`Right-hand side of ' instanceof ' is not an object`)
  }
  const rightPrototype = right.prototype
  left = Object.getPrototypeOf(left)

  while (left !== null) {
    if (left === rightPrototype) return true
    left = Object.getPrototypeOf(left)
  }

  return false
}

console.log(simulateInstanceOf(Function, Object))
console.log(simulateInstanceOf(Function, Function))
console.log(simulateInstanceOf(Object, Function))
console.log(simulateInstanceOf(Object, Object))

class A {}
const a = new A()

console.log(simulateInstanceOf(a, A))

// 应该都返回 true

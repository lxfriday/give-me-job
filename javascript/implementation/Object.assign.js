/**
 * Object.assign(target, ...sources)
 * @link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */

/* eslint-disable */
function assign(target, sources) {
  if (target === null || target === undefined) {
    throw new TypeError('Cannot convert undefined or null to object')
  }

  const targetType = typeof target
  const to = targetType === 'object' ? target : Object(target)

  for (let i = 1; i < arguments.length; i++) {
    const source = arguments[i]
    const sourceType = typeof source
    if (sourceType === 'object' || sourceType === 'string') {
      for (const key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          to[key] = source[key]
        }
      }
    }
  }
  return to
}

Object.defineProperty(Object, 'assign', {
  value: assign,
  writable: true,
  configurable: true,
  enumerable: false,
})

const obj = { d: 1 }

console.log(obj === Object.assign(1, { a: 1 }, 'abc'))
console.log(Object.assign(1, { a: 1 }, 'abc'))
console.log(obj)

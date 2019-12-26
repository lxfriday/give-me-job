/**
 * 深拷贝
 * @link https://juejin.im/post/5d6aa4f96fb9a06b112ad5b1#heading-12
 *
 * 浅拷贝：创建一个新对象，这个对象有着原始对象属性值的一份精确拷贝。
 *        如果属性是基本类型，拷贝的就是基本类型的值，如果属性是引用类型，
 *        拷贝的就是内存地址，所以如果其中一个对象改变了这个地址中的内容，就会影响到另一个对象。
 * 深拷贝：将一个对象从内存中完整的拷贝一份出来,从堆内存中开辟一个新的区域存放新对象,
 *        且修改新对象不会影响原对象
 */

const mapTag = '[object Map]'
const setTag = '[object Set]'
const arrayTag = '[object Array]'
const objectTag = '[object Object]'
const argsTag = '[object Arguments]'

const boolTag = '[object Boolean]'
const dateTag = '[object Date]'
const numberTag = '[object Number]'
const stringTag = '[object String]'
const symbolTag = '[object Symbol]'
const errorTag = '[object Error]'
const regexpTag = '[object RegExp]'
const funcTag = '[object Function]'

const deepTag = [mapTag, setTag, arrayTag, objectTag, argsTag]

const obj = {
  a: 1,
  am: new Number(1),
  b: 2,
  nu: null,
  str: 'str',
  strObj: new String('str'),
  array: [1, 2, 3],
  map: new Map([['a', 1], ['b', 2]]),
  set: new Set(['1', '2', '3']),
  arrowFunc: () => {},
  func: function() {
    console.log('hello world')
  },
  reg: /[1-9]{3}/gm,
  und: undefined,
  obj: {
    name: 'lxfriday',
    age: 10086,
  },
  bool: true,
  sym: Symbol(1),
  date: new Date(),
}

obj.target = obj

function forEach(array, iteratee) {
  let index = -1
  const length = array.length
  while (++index < length) {
    iteratee(array[index], index)
  }
  return array
}

function isObject(target) {
  const type = typeof target
  return target !== null && (type === 'object' || type === 'function')
}

function getInstance(target) {
  const Constructor = target.constructor
  return new Constructor()
}

function getType(target) {
  return Object.prototype.toString.call(target)
}

function cloneFunc(target) {
  if (target.prototype) {
    const paramsReg = /(?<=\().*(?=\)\s*\{)/
    const bodyReg = /(?<={)(.|\n)*(?=\})/m
    const paramsStr = paramsReg.exec(target.toString())
    const bodyStr = bodyReg.exec(target.toString())
    return new Function(paramsStr[0], bodyStr[0])
  } else {
    return eval(target.toString())
  }
}

function cloneRegExp(target) {
  return new RegExp(target.source, target.flags)
}
function cloneSymbol(target) {
  return Symbol.prototype.valueOf.call(target)
}

function cloneOtherType(target) {
  const Constructor = target.constructor
  switch (getType(target)) {
    case boolTag:
    case numberTag:
    case stringTag:
    case errorTag:
    case dateTag:
      return new Constructor(target)
    case regexpTag:
      return cloneRegExp(target)
    case funcTag:
      return cloneFunc(target)
    case symbolTag:
      return cloneSymbol(target)
    default:
      return null
  }
}

function deepClone(target, map = new Map()) {
  if (!isObject(target)) return target

  let cloneTarget

  const targetType = getType(target)
  if (deepTag.includes(targetType)) {
    cloneTarget = getInstance(target)
  } else {
    return cloneOtherType(target)
  }

  if (map.get(target)) {
    return map.get(target)
  }
  map.set(target, cloneTarget)

  if (targetType === mapTag) {
    forEach([...target.keys()], key => {
      cloneTarget.set(key, target.get(key))
    })
  }

  if (targetType === setTag) {
    forEach([...target], value => {
      cloneTarget.add(value)
    })
  }

  const keys = targetType === arrayTag ? undefined : Object.keys(target)
  forEach(keys || target, function(value, key) {
    if (keys) {
      key = value
    }
    cloneTarget[key] = deepClone(target[key], map)
  })

  return cloneTarget
}

// console.log(obj)
console.log(deepClone(obj))
// console.log(JSON.stringify(obj))
// console.log(JSON.parse(JSON.stringify(obj)))
// console.log(Object.keys(obj))

// const array = new Array(2000000).fill(5)

// console.time('for')

// for (let index = 0; index < array.length; index++) {
//   const element = array[index]
// }
// console.timeEnd('for')

// console.time('for in')

// for (const i in array) {
//   const element = array[i]
// }
// console.timeEnd('for in')

// console.time('while')
// let w = -1
// while (++w < array.length) {
//   const element = array[w]
// }
// console.timeEnd('while')

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

function isObject(target) {
  const type = typeof target
  return target !== null && (type === 'object' || type === 'function')
}

function getType(target) {
  return Object.prototype.toString.call(target)
}

function forEach(array, iteratee) {
  let i = -1
  const length = array.length
  while (++i < length) {
    iteratee(array[i], i)
  }
  return array
}

const deepIncludeTypes = [objectTag, arrayTag, mapTag, setTag]

function cloneFunc(target) {
  if (target.prototype) {
    const paramReg = /(?<=\().*(?=\)\s*{)/
    const bodyReg = /(?<=\{)(.|\n)*(?=})/
    const params = paramReg.exec(target.toString())[0]
    const body = bodyReg.exec(target.toString())[0]
    return new Function(params, body)
  } else {
    // 箭头函数
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
  switch (getType(target)) {
    case boolTag:
    case numberTag:
    case stringTag:
    case dateTag:
      return new target.constructor(target)
    case funcTag:
      return cloneFunc(target)
    case regexpTag:
      return cloneRegExp(target)
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

  if (deepIncludeTypes.includes(targetType)) {
    // object => new Object => {}
    // array => new Array => []
    // Map => new Map()
    // Set => new Set()
    cloneTarget = new target.constructor()
  } else {
    return cloneOtherType(target)
  }

  if (map.get(target)) {
    return map.get(target)
  }

  if (getType(target) === objectTag) {
    map.set(target, cloneTarget)

    forEach(Object.keys(target), key => {
      cloneTarget[key] = deepClone(target[key], map)
    })
  }

  if (getType(target) === arrayTag) {
    map.set(target, cloneTarget)

    forEach(target, (v, k) => {
      cloneTarget[k] = deepClone(v, map)
    })
  }
  if (getType(target) === setTag) {
    map.set(target, cloneTarget)

    forEach([...target], value => {
      cloneTarget.add(deepClone(value), map)
    })
  }

  if (getType(target) === mapTag) {
    map.set(target, cloneTarget)

    forEach([...target.keys()], key => {
      cloneTarget.set(key, deepClone(target.get(key), map))
    })
  }

  return cloneTarget
}

const obj = {
  a: 1,
  am: new Number(1),
  b: 2,
  nu: null,
  str: 'str',
  strObj: new String('str'),
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
  array: [1, 23, 3, 4, [5, 6, [7, 8]]],
  o: {
    a: 1,
    b: 2,
    c: {
      d: 1,
      e: 2,
      f: {
        g: 1,
        h: 2,
      },
    },
  },
  num: 1,
  str: 'str',
}

obj.target = obj

console.log(deepClone(obj))

/**
 * Object.create(obj[, propertiesObject])
 * @link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create
 */
Object.create = function(proto, propertiesObject) {
  const res = {}
  // proto 只能为 null 或者 type 为 object 的数据类型
  if (!(proto === null || typeof proto === 'object')) {
    throw new TypeError('Object prototype may only be an Object or null')
  }
  Object.setPrototypeOf(res, proto)

  if (propertiesObject === null) {
    throw new TypeError('Cannot convert undefined or null to object')
  }
  if (propertiesObject) {
    Object.defineProperties(res, propertiesObject)
  }

  return res
}
console.log(Object.create(null, 1))

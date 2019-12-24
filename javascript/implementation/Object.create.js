/**
 * Object.create(obj[, propertiesObject])
 * @link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Object/create
 */

Object.create = function(obj, propertiesObject) {
  const res = {}
  res.__proto__ = obj
  if (propertiesObject) {
    Object.defineProperties(res, propertiesObject)
  }
  return res
}

console.log(Object.create(null, 1))

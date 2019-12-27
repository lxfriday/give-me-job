/**
 * new constructor[([arguments])]
 * @link https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Operators/new
 * 当代码 new Foo(...) 执行时，会发生以下事情：
 * 1. 一个继承自 Foo.prototype 的新对象被创建。
 * 2. 使用指定的参数调用构造函数 Foo，并将 this 绑定到新创建的对象。new Foo 等同于 new Foo()，也就是没有指定参数列表，
 *    Foo 不带任何参数调用的情况。
 * 3. 由构造函数返回的对象就是 new 表达式的结果。如果构造函数没有显式返回一个对象，则使用步骤1创建的对象。
 *   （一般情况下，构造函数不返回值，但是用户可以选择主动返回对象，来覆盖正常的对象创建步骤）
 */
/* eslint-disable */

// ---- test code-------
function A(name) {
  this.name = name
  return this
}

A.prototype.sayName = function() {
  console.log(this.name)
}

// ---- test code-------

function monitorNew() {
  const Constructor = Array.prototype.shift.call(arguments)
  const target = Object.create(Constructor.prototype)

  const ret = Constructor.apply(target, arguments)
  if (ret === null) return target
  return typeof ret === 'object' ? ret : target
}

console.log(monitorNew(A, 'yuny'))

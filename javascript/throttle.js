/* eslint-disable */
// 第四版
function throttle(func, wait, options) {
  var timeout, context, args, result
  var previous = 0
  if (!options) options = {}

  var later = function() {
    previous = options.leading === false ? 0 : new Date().getTime()
    timeout = null
    result = func.apply(context, args)
    if (!timeout) context = args = null
  }

  var throttled = function() {
    var now = new Date().getTime()
    if (!previous && options.leading === false) previous = now
    var remaining = wait - (now - previous)
    context = this
    args = arguments
    if (remaining <= 0 || remaining > wait) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      result = func.apply(context, args)
      if (!timeout) context = args = null
    } else if (!timeout && options.trailing !== false) {
      timeout = setTimeout(later, remaining)
    }
    return result
  }
  return throttled
}

// 必须不断触发才可以执行
function throttle1(func, wait) {
  var previous = 0
  return function() {
    var now = Date.now()
    var ctx = this
    var args = arguments
    if (now - previous > wait) {
      func.apply(ctx, args)
      previous = now
    }
  }
}

function throttle2(func, wait) {
  var timeout
  return function() {
    var ctx = this
    args = arguments
    if (!timeout) {
      timeout = setTimeout(() => {
        func.apply(ctx, args)
        timeout = null
      }, wait)
    }
  }
}

var count = 1
var container = document.getElementById('container')

function getUserAction(e) {
  container.innerHTML = count++
}

var setUseAction = throttle2(getUserAction, 1000)

container.onmousemove = setUseAction

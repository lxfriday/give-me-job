/**
 * 防抖
 */

export function debounce(func: Function, wait: number, immediate?: boolean): Function {
  let timeout: NodeJS.Timeout | null, res: any
  function debounced(this: any, ...args: []) {
    const ctx = this
    if (timeout) clearTimeout(timeout)
    if (immediate) {
      const callNow = !timeout // 如果已经执行过则不用立即执行
      // 指定时间之后 callNow 才为 true
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) res = func.apply(ctx, args)
    } else {
      timeout = setTimeout(() => {
        func.apply(ctx, args)
      }, wait)
    }
    return res
  }
  debounced.cancel = function cancel() {
    clearTimeout(<NodeJS.Timeout>timeout)
    timeout = null
  }

  return debounced
}

const t = debounce(() => {
  console.log(Date.now())
}, 1000)

for (let i = 0; i < 10; i++) {
  t() // 只打印一次
}

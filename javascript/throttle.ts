type Opts = {
  leading?: boolean
  tailing?: boolean
}

export function throttle(func: Function, wait: number, options: Opts) {
  let timeout: NodeJS.Timeout | null
  let previous: number = 0
  let result: any

  function throttled(this: any, ...args: []) {
    const ctx = this
    const now = Date.now()
    const remaining: number = wait - (now - previous)
    if (remaining <= 0) {
      if (timeout) {
        clearTimeout(timeout)
        timeout = null
      }
      previous = now
      result = func.apply(ctx, args)
    } else if (!timeout) {
      timeout = setTimeout(() => {
        previous = Date.now()
        timeout = null
        result = func.apply(ctx, args)
      }, wait)
    }
    return result
  }

  return throttled
}

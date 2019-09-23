function debounce(func, wait, immediate) {
  let timeout
  return function debounced(...args) {
    // eslint-disable-next-line
    const ctx = this
    if (timeout) clearTimeout(timeout)

    if (immediate) {
      const callNow = !timeout
      timeout = setTimeout(() => {
        timeout = null
      }, wait)
      if (callNow) func.apply(ctx, args)
    } else {
      timeout = setTimeout(() => {
        func.apply(ctx, args)
      }, wait)
    }
  }
}
let count = 0
const container = document.querySelector('#container')

function setCount(e) {
  console.log(this)
  console.log(e)
  container.innerHTML = count++
}

container.onmousemove = debounce(setCount, 1000, true)

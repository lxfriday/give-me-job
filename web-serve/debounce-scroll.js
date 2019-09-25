/* eslint-disable */
function debounce(func, wait, immediate) {
  let timeout
  function debounced(...args) {
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
  debounced.cancel = function cancel() {
    clearTimeout(timeout)
    timeout = null
  }
  return debounced
}

document.addEventListener('DOMContentLoaded', function() {
  const $page = document.querySelector('#page')
  function toastNoti(template = '', position = 'top-left') {
    spop({
      position,
      template,
    })
  }
  const debouncedToastNoti = debounce(toastNoti, 500)
  $page.addEventListener('scroll', function(e) {
    const scrollTop = e.target.scrollTop
    toastNoti(`滚动到 ${scrollTop}`)
    debouncedToastNoti(`滚动到 ${scrollTop}`, 'top-right')
  })
})

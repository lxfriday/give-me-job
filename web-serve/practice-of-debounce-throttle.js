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

function getListData(v, $side) {
  const res = []
  if (!v.length) return res
  const length = ((Math.random() * 20) >> 1) + 1
  for (let i = 0; i < length; i++) {
    res.push(v + '  ' + Math.floor(Math.random() * 1000))
  }
  $side.innerHTML = '<p>虽然内部计算很多，但是 suggest 列表几乎不变动，只显示最后的结果</p>' + '<p>' + JSON.stringify(res) + '</p>'
  return res
}

document.addEventListener('DOMContentLoaded', function() {
  const $input = document.querySelector('#input')
  const $list = document.querySelector('#list')
  const $side = document.querySelector('#side')
  const $sideRes = document.querySelector('#side-res')

  function appendListItem(data, $ref) {
    const df = document.createDocumentFragment()
    for (let i = 0; i < data.length; i++) {
      const a = document.createElement('a')
      a.classList.add('collection-item')
      a.innerText = data[i]
      df.appendChild(a)
    }
    $ref.innerHTML = ''
    $ref.appendChild(df)
  }

  const dAppendListItem = debounce(appendListItem, 200)

  $input.addEventListener('input', function(e) {
    dAppendListItem(getListData(e.target.value, $side), $list)
  })
  $input.addEventListener('focus', function() {
    $list.style.display = 'block'
  })
  $input.addEventListener('blur', function() {
    $list.style.display = 'none'
  })
})

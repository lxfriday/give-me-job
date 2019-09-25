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
  const length = 10
  for (let i = 0; i < length; i++) {
    res.push(v + '  ' + (10 - i))
  }
  $side.innerHTML = '<p>虽然内部计算很多，但是 suggesttion 列表没有变动，只显示最后的结果</p>' + '<p>' + JSON.stringify(res) + '</p>'
  return res
}

document.addEventListener('DOMContentLoaded', function() {
  const $input = document.querySelector('#input')
  const $list = document.querySelector('#list')
  const $side = document.querySelector('#side')
  const $sideRes = document.querySelector('#side-res')

  // 显示新的搜索建议
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

  // 没有输入的时候给出预 suggestion
  appendListItem(getListData('MI Alpha', $side), $list)

  $input.addEventListener('input', function(e) {
    // 依据搜索内容给出提示
    const searchV = e.target.value
    if (searchV.length) {
      dAppendListItem(getListData(e.target.value, $side), $list)
    } else {
      // 清空的时候给出默认的搜索建议
      dAppendListItem(getListData('MI Alpha', $side), $list)
    }
  })
  // 聚焦显示
  $input.addEventListener('focus', function() {
    $list.style.display = 'block'
  })
  // 失焦隐藏
  $input.addEventListener('blur', function() {
    $list.style.display = 'none'
  })
})

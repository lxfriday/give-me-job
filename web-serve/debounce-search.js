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

function createResultListItem(title) {
  return `<div class="card horizontal">
            <div class="card-image">
              <img src="http://qiniu1.lxfriday.xyz/blog/QQ截图20190925124901_20190925125022.png" />
            </div>
            <div class="card-stacked">
              <div class="card-content">
                <p>${title}</p>
              </div>
              <div class="card-action">
                <a href="#">This is a link</a>
              </div>
            </div>
          </div>`
}

/**
 * 生成搜索结果列表
 */
function generateSearchResult(title, $ref) {
  let child = ''
  for (let i = 0; i < Math.floor(Math.random() * 10) + 3; i++) {
    child += createResultListItem(`${title} -- ${i}`)
  }
  $ref.innerHTML = child
}

document.addEventListener('DOMContentLoaded', function() {
  const $page = document.querySelector('#page')
  const $input = document.querySelector('#input')
  const $list = document.querySelector('#list')
  const $side = document.querySelector('#side')
  const $resultContainer = document.querySelector('#result-container')
  let prevSearch = ''

  function showList() {
    $list.style.display = 'block'
  }
  function hideList(params) {
    $list.style.display = 'none'
  }

  // 显示新的搜索建议
  function appendListItem(data, $ref) {
    const df = document.createDocumentFragment()
    for (let i = 0; i < data.length; i++) {
      const a = document.createElement('a')
      a.classList.add('collection-item')
      a.dataset.value = data[i]
      a.innerText = data[i]
      df.appendChild(a)
    }
    $ref.innerHTML = ''
    $ref.appendChild(df)
  }

  const dAppendListItem = debounce(appendListItem, 200)
  const showSearchResult = debounce(generateSearchResult, 500)

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
  $input.addEventListener('focus', function(e) {
    showList()
  })
  $input.addEventListener('keydown', function(e) {
    // 点击了回车
    if (e.keyCode === 13) {
      hideList()
      const value = $input.value
      if (prevSearch !== value) {
        spop(`发起搜索： ${value}`)
        showSearchResult(value, $resultContainer)
        prevSearch = value
      } else {
        spop(`搜索的是相同的搜索词，自动忽略哈~ ${value}`)
      }
    } else {
      showList()
    }
  })
  $list.addEventListener('click', function(e) {
    hideList()
    const value = e.target.dataset.value
    $input.value = value
    spop(`发起搜索： ${value}`)
    showSearchResult(value, $resultContainer)
  })
})

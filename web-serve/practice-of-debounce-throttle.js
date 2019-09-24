function getListData(v, $side) {
  const res = []
  const length = ((Math.random() * 20) >> 1) + 1
  for (let i = 0; i < length; i++) {
    res.push(v + '  ' + Math.floor(Math.random() * 1000))
  }
  $side.innerHTML = '<p>请求到的数据</p>' + '<p>' + JSON.stringify(res) + '</p>'
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

  $input.addEventListener('input', function(e) {
    appendListItem(getListData(e.target.value, $side), $list)
  })
})

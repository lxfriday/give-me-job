document.addEventListener('DOMContentLoaded', function() {
  // const targetUrl = 'https://quan.suning.com/getSysTime.do'
  const targetUrl = '/api'

  const $button = document.querySelector('#button')
  const $file = document.querySelector('#upload-file')

  $button.addEventListener('click', function() {
    const formdata = new FormData()
    const file = $file.files[0]
    formdata.append('file', file)
    console.log({ file })

    const xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function(e) {
      console.log('onreadystatechange', xhr)
    }
    xhr.open('POST', targetUrl)
    xhr.setRequestHeader('Content-Type', 'multipart/form-data')
    xhr.responseType = 'json'

    xhr.onloadstart = function(e) {
      console.log('onloadstart', xhr)
    }
    xhr.onloadend = function(e) {
      console.log('loadend', xhr)
    }
    xhr.onload = function(e) {
      console.log('onload', xhr)
      console.log('xhr.response', xhr.response)
      console.log('response headers', xhr.getAllResponseHeaders())
    }
    xhr.onerror = function(e) {
      console.log('onerror', e)
    }
    xhr.ontimeout = function(e) {
      console.log('ontimeout', e)
    }
    xhr.onprogress = function(e) {
      console.log('onprogress', e)
    }
    xhr.upload.onprogress = function(e) {
      console.log('upload.onprogress ', e, Math.floor((e.loaded * 100) / e.total) + ' %')
    }
    xhr.send(formdata)
  })
})

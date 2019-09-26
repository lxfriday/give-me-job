document.addEventListener('DOMContentLoaded', function() {
  const targetUrl = 'http://quan.suning.com/getSysTime.do'

  const $button = document.querySelector('#button')
  $button.addEventListener('click', function() {
    const xhr = new XMLHttpRequest()
    xhr.onreadystatechange = function(e) {
      console.log('onreadystatechange', xhr)
    }
    xhr.responseType = 'json'
    xhr.open('GET', targetUrl)

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
    xhr.send()
  })
})

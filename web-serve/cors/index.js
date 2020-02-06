document.addEventListener('DOMContentLoaded', function() {
  const req = new XMLHttpRequest()
  req.open('post', 'http://wwwww.com/api')
  req.setRequestHeader('authorization', 'token xxxasdasdasdasfasf')
  req.setRequestHeader('content-type', 'multipart/form-data')
  req.responseType = 'text'
  req.onload = function() {
    // console.log(this.response)
    console.log(this.getAllResponseHeaders())
    console.log(this.response)
  }
  const form = new FormData()
  form.append('namename', 'lx')
  req.send(form)
})

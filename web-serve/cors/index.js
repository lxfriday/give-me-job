document.addEventListener('DOMContentLoaded', function() {
  const req = new XMLHttpRequest()
  req.open('post', 'http://n.com/api')
  // req.setRequestHeader('authorization', 'token xxxasdasdasdasfasf')
  req.responseType = 'application/json'
  req.onreadystatechange = function() {
    // console.log(this.response)
    console.log(this.getAllResponseHeaders())
  }
  req.send()
})

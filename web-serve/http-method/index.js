document.addEventListener('DOMContentLoaded', function() {
  const req = new XMLHttpRequest()
  req.open('get', 'http://n.com/api?name=lxfriday')
  // req.setRequestHeader('authorization', 'token xxxasdasdasdasfasf')
  req.onreadystatechange = function() {
    if (this.status === 4) {
      console.log(this.getAllResponseHeaders)
    }
  }
  req.send()
})

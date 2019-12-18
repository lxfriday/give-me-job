const http = require('http')

http
  .createServer(function(req, res) {
    console.log(req.headers)
    console.log(req.headers)
    res.setHeader('access-control-allow-origin', 'http://m.com')
    res.setHeader('access-control-allow-methods', 'get,post,delete')
    res.setHeader('access-control-allow-headers', 'authorization')
    res.setHeader('access-control-expose-headers', 'x-name')
    res.setHeader('x-name', 'lxfriday')
    res.setHeader('location', 'http://n.com/hello')
    console.log('req.url', req.url)

    if (req.url.indexOf('hello') !== -1) {
      console.log('req.url', req.url)
      res.end('hello')
    } else {
      res.writeHead(302)
      res.end()
    }
  })
  .listen(5555)

console.log('listening at 5555')

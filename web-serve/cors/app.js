const http = require('http')

http
  .createServer(function(req, res) {
    console.log('req.headers', req.headers)
    console.log('req.method', req.method)

    res.setHeader('access-control-allow-origin', 'http://zzzz.com')
    res.setHeader('access-control-allow-methods', 'get,post,delete')
    res.setHeader('access-control-allow-headers', 'authorization')
    res.setHeader('access-control-expose-headers', 'x-name')
    res.setHeader('x-name', 'lxfriday')
    res.setHeader('authorization', 'token xxxasdasdasdasfasf')
    res.setHeader('cache-control', 'max-age=5000')
    res.end(
      JSON.stringify({
        name: 'lxfriday',
      })
    )
  })
  .listen(5555)

console.log('listening at 5555')

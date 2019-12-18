const http = require('http')
const fs = require('fs')

// console.log(fs.createReadStream('./frame.html'))
// console.log(fs.readFileSync('./frame.html'))

http
  .createServer(function(req, res) {
    res.setHeader('x-frame-options', 'sameorigin')
    res.setHeader('content-type', 'text/html')
    if (req.url.indexOf('frame.html') !== -1) {
      res.end(fs.readFileSync('./frame.html'))
    } else {
      res.end(fs.readFileSync('./index.html'))
    }
  })
  .listen(5555)

console.log('listening at 5555')

const http = require('http')
const formidable = require('formidable')
const url = require('url')

const server = http.createServer(function(req, res) {
  console.log(url.parse(req.url))

  const form = new formidable.IncomingForm()
  form.uploadDir = './assets'
  form.keepExtensions = true

  form.parse(req, function(err, fields, files) {
    console.log('files', {
      err,
      fields,
      files,
    })

    res.writeHead(200, { 'content-type': 'application/json' })
    res.write(JSON.stringify({ success: true }))
    res.end()
  })
})

server.listen(3333)

// console.log('now listening 3333')

// const server2 = http.createServer(function(req, res) {
//   console.log(url.parse(req.url))
//   res.setHeader('Content-Type', 'application/json')
//   res.statusCode = 200
//   res.end(JSON.stringify({ hello: 'world' }))
// })
// server2.listen(3334)

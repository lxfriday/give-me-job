const url = require('url')
const http = require('http')

const app = http.createServer((req, res) => {
  const urlObj = url.parse(req.url)
  console.log(urlObj)
  const query = urlObj.query.split('&').map(v => ({ [v.split('=')[0]]: v.split('=')[1] }))
  console.log('query', query)
  res.end(`${query[1].callback}('a cat ')`)
})

app.listen(3333)

console.log('listening')

// Url {
//   protocol: null,
//   slashes: null,
//   auth: null,
//   host: null,
//   port: null,
//   hostname: null,
//   hash: null,
//   search: '?wd=Iloveyou&callback=show',
//   query: 'wd=Iloveyou&callback=show',
//   pathname: '/say',
//   path: '/say?wd=Iloveyou&callback=show',
//   href: '/say?wd=Iloveyou&callback=show' }
// query [ { wd: 'Iloveyou' }, { callback: 'show' } ]

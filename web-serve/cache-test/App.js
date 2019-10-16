// const Koa = require('koa')
// const KoaStatic = require('koa-static')
// const http = require('http')

// console.log(KoaStatic)

// const server = http.createServer(function(req, res) {
//   console.log(req.url)
//   res.setHeader('Cache-Control', 'max-age=816000')
//   res.setHeader('Expires', new Date(Date.now() + 500000000))
//   res.write('hello this is 3333')
//   res.end()
// })

// server.listen(3333)
// console.log('listening 3333')

const Path = require('path')
const crypto = require('crypto')
const Koa = require('koa')
const fs = require('fs')
const mime = require('mime')
const serve = require('koa-static')
const Router = require('koa-router')

const router = new Router()
const app = new Koa()

router.get(/\S*\.(jpe?g|png)$/, async (ctx, next) => {
  const { request, response, path } = ctx
  ctx.type = mime.getType(path)
  response.set('cache-control', 'no-cache')

  const ifNoneMatch = request.headers['if-none-match']
  const imagePath = Path.resolve(__dirname, `.${path}`)
  const hash = crypto.createHash('md5')
  const imageBuffer = await fs.readFileSync(imagePath)
  hash.update(imageBuffer)
  const etag = `"${hash.digest('hex')}"`
  if (ifNoneMatch === etag) {
    ctx.status = 304
  } else {
    response.set('etag', etag)
    ctx.body = imageBuffer
  }
  await next()
})
app.use(router.routes()).use(router.allowedMethods())

app.use(
  serve('./public', {
    maxage: 0,
    setHeaders(res) {
      res.setHeader('Cache-control', 'no-cache,no-store,must-revalidate')
    },
  })
)

app.listen(3333)

console.log('listening on port 3333')

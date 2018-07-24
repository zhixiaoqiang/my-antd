const router = require('koa-router')()

router.get('/', ctx => ctx.body = 'hello world!')
      .get('/home', ctx => ctx.body = 'hello home!')
module.exports = router
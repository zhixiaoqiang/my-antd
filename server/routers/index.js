const router = require('koa-router')()
const login = require('./login')
const home = require('./home')
const info = require('./info')

// router.use('/login') 是父路由， 后面跟子路由
router.get('/', ctx => ctx.body = 'hi')
router.use('/login', login.routes())
router.use('/home', home.routes())
router.use('/user', info.routes())

module.exports = router
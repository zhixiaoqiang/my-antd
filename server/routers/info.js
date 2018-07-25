const router = require('koa-router')()
const info = require('../services/info')

router.get('/getInfo', info.getInfo)

module.exports = router
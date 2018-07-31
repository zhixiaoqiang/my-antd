const router = require('koa-router')()
const youdao = require('../services/youdao')

router.get('/suggest', youdao.suggest)

module.exports = router
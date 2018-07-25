const router = require('koa-router')()
const user = require('../services/user')

router.get('/signUp', user.signUp)
      .get('/signIn', user.signIn)

module.exports = router
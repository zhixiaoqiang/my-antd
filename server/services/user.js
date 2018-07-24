const db = require('../db/util')

const user = {

    /**
     * 处理注册逻辑
     * @param {context} ctx 
     */
    async signUp(ctx) {
        const query = ctx.query
        const name = query.userName || 'nana'
        const password = query.password || 'nana'
        let results = await db.find({name})
        ctx.body = {data: {text: '失败', comment: name}, success: true}
        if (results.length > 0) {
            ctx.body = {data: {text: '用户名已被注册', comment: name}, success: false}
        } else {
            results = await db.insert({name, password})
            if (results) {
                ctx.body = {data: {text: '注册成功', comment: name}, success: true}
            }
        }
    },

    /**
     * 处理登录逻辑
     * @param {context} ctx
     */
    async signIn(ctx) {
        const query = ctx.query
        const name = query.userName || 'nana'
        const password = query.password || 'nana'
        let results = await db.find({name, password})
        ctx.body = '登录失败'
        if (results.length > 0) {
            ctx.body = '登录成功'
        } else {
            ctx.body = '用户或密码错误'
        }
    }

}

module.exports = user
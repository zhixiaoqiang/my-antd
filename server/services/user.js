const db = require('../db/user')

const user = {

    /**
     * 处理注册逻辑
     * @param {context} ctx 
     */
    async signUp(ctx) {
        const query = ctx.query
        const name = query.userName
        const password = query.password
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
        const name = query.userName
        const password = query.password
        let results = await db.find({name, password})
        ctx.body = {data: {text: '登录失败', comment: name}, success: true}
        if (results.length > 0) {
            ctx.body = {data: {text: '登录成功', comment: name}, success: false}
        } else {
            ctx.body = {data: {text: '用户或密码错误', comment: name}, success: false}
        }
    }

}

module.exports = user
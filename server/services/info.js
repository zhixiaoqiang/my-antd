const db = require('../db/info')

const info = {

    /**
     * 处理获取信息逻辑
     * @param {context} ctx 
     */
    async getInfo(ctx) {
        const query = ctx.query
        const name = query.userName || 'nana'
        let results = await db.getInfo({name})
        ctx.body = {errCode: 1, message: '查询失败', success: false}
        if (results.length > 0) {
            let info = JSON.parse(JSON.stringify(results[0]))
            info.time = new Date().toLocaleString()
            ctx.body = {data: {info}, success: true}
        } else {
            ctx.body = {data: {info: {time: new Date().toLocaleString()}}, success: true}
        }
    }
}

module.exports = info
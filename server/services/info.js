const db = require('../db/info')
const axios = require('axios')
const info = {

    /**
     * 处理获取信息逻辑
     * @param {context} ctx 
     */
    async getInfo(ctx) {
        const query = ctx.query
        const name = query.userName || 'nana'
        let results = await db.getInfo({name})
        let dban = await axios.get('https://api.douban.com/v2/book/1220562')
        ctx.body = {errCode: 1, message: '查询失败', success: false}
        if (results.length > 0) {
            let info = JSON.parse(JSON.stringify(results[0]))
            info.time = new Date().toLocaleString()
            info.dban = dban.data
            ctx.body = {data: {info}, success: true}
        } else {
            ctx.body = {data: {info: {time: new Date().toLocaleString()}}, success: true}
        }
    }
}

module.exports = info
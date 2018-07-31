const axios = require('axios')
const youdao = {
    /**
     * 单词查询
     * @param {context} ctx 
     */
    async suggest(ctx) {
        const query = ctx.query
        const word = query.word
        let suggest = await axios.get(encodeURI(`http://dict.youdao.com/suggest?q=${word}&num=100&doctype=json`))
        ctx.body = {errCode: 1, message: '查询失败', success: false}
        if (suggest.data.result && suggest.data.result.code === 200) {
            let info = suggest.data.data
            ctx.body = {data: info, success: true}
        } else {
            ctx.body = {data: '没有找到', success: true}
        }
    }
}

module.exports = youdao
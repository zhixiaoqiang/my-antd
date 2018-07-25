const mongoose = require('mongoose')

// 定义集合的字段及类型等
const infoSchema = new mongoose.Schema({
    name: String
})

// 默认导出'user' + 's'集合，可操作users集合的数据
module.exports = mongoose.model('info', infoSchema)

const mongoose = require('mongoose')

// 定义集合的字段及类型等
const userSchema = new mongoose.Schema({
    name: String,
    password: String
})

// 默认导出'user' + 's'集合，可操作users集合的数据
module.exports = mongoose.model('user', userSchema)
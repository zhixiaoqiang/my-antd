// const Info = require('../models/info')
const User = require('../models/user')
/**
 * 返回信息
 * @param {Object} options
 */
const getInfo = function(options) {
    return new Promise((resolve, reject) => {
        User.find(options ,{_id: 0, name: 1, password: 1}, (err, res) => {
            if (err)
                reject(err)
            else
                resolve(res)
        })
    })
  }

module.exports = {
  getInfo
}
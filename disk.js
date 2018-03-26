const fs = require('fs')
const path = require('path')
const filesize = require('filesize')

module.exports.getFileSize = function getFileSize (filename, callback) {
  var filepath = path.join(__dirname, filename)
  console.log('[disk] Looking up ' + filepath)
  fs.stat(filepath, function (error, stats) {
    if (error) {
      return callback(error)
    }
    let msg = 'File size is ' + filesize(stats.size, {exponent: 2})
    callback(null, msg)
  })
}

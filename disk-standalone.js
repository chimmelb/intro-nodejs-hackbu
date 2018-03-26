const fs = require('fs')
const path = require('path')
const filesize = require('filesize')

// first is node, second is disk.js, we want 3
var filename = process.argv[2]

if (!filename) {
  console.error('Provide a filename')
  process.exit(1)
}

function getFileSize (filename, callback) {
  var filepath = path.join(__dirname, filename)
  console.log(filepath)
  fs.stat(filepath, function (error, stats) {
    if (error) {
      return callback(error)
    }
    let msg = 'File size is ' + filesize(stats.size, {exponent: 2})
    callback(null, msg)
  })
}

getFileSize(filename, function (err, words) {
  if (err) {
    console.log('There was an error: ' + err)
    return
  }
  console.log(words)
})

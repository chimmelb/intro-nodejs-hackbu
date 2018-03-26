const http = require('http')
const port = 3027
const disk = require('./disk.js')

const requestHandler = (request, response) => {
  var filename = request.url.split('/')[1]
  disk.getFileSize(filename, function (err, msg) {
    if (err) {
      response.statusCode = 400
      response.end('Not found.')
      return
    }
    response.end(msg)
  })
  // response.end('Hello from NodeJS!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})

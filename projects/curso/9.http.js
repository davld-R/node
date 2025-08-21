const http = require('node:http') // para el protocolo http
const { findAvaliblePort } = require('./10.free-port')

const desiredPort = process.env.PORT ?? 3000

const server = http.createServer((req, res) => {
  console.log('request received')
  res.end('Hello World')
})

findAvaliblePort(desiredPort).then(port => {
  server.listen(port, () => {
    console.log(`Server listening on port http://localhost:${port}`)
  })
})

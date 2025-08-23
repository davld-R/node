const express = require('express')
const ditto = require('./pokemon/ditto.json')

const app = express()

app.disable('x-powered-by')

app.use(express.json())

// app.use((req, res, next) => {
//   if (req.method !== 'POST') return next()
//   if (req.headers['content-type'] !== 'application/json') return next()

//   // solo llegan reques que son POST y que tieene el header Conten-Type: application/json
//   let body = ''

//   req.on('data', chunk => {
//     body += chunk.toString()
//   })

//   req.on('end', () => {
//     const data = JSON.parse(body)
//     data.timestamp = Date.now()
//     // Aqui se muta la reques y meter la información en el req.body
//     req.body = data
//     next()
//   })
// })

const PORT = process.env.PORT ?? 3000

app.get('/pokemon/ditto', (req, res) => {
  res.send(ditto)
})

app.post('/pokemon', (req, res) => {
  // em eñ req.body deberiamos guardar en base de datos
  res.status(201).json(req.body)
})

// La última
app.use((req, res) => {
  res.status(404).send('Not Found 404')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})

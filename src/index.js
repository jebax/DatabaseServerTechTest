const express = require('express')
const url = require('url')
const app = express()
const port = 3000

let storedData = {}

app.get('/set', (req, res) => {
  let request_query = url.parse(req.url, true).query
  let key = Object.keys(request_query)[0]
  let value = Object.values(request_query)[0]

  storedData[key] = value
  res.send(`${key} stored successfully`)
})

app.get('/get', (req, res) => {
  let request_query = url.parse(req.url, true).query
  let key = Object.values(request_query)[0]

  res.send(storedData[key])
})

app.listen(port)

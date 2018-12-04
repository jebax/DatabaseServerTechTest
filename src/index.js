const express = require('express')
const url = require('url')
const app = express()
const port = 3000

let storedData = {}

app.get('/set', (req, res) => {
  let params = url.parse(req.url, true).query
  let key = Object.keys(params)[0]
  let value = Object.values(params)[0]

  storedData[key] = value
  res.send(`${key} stored successfully`)
})

app.get('/get', (req, res) => {
  let params = url.parse(req.url, true).query
  let key = Object.values(params)[0]

  res.send(storedData[key])
})

app.listen(port)

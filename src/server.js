const express = require('express')
const url = require('url')
const server = express()
const port = 4000
const storerExports = require('./data-storer.js')

let dataStorer = new storerExports.DataStorer()

server.get('/set', (req, res) => {
  let params = url.parse(req.url, true).query

  dataStorer.set(params)
  res.send('Data stored successfully')
})

server.get('/get', (req, res) => {
  let params = url.parse(req.url, true).query

  res.send(dataStorer.get(params))
})

server.listen(port)

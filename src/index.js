const express = require('express')
const url = require('url')
const app = express()
const port = 4000
const dataStorerClass = require('./data-storer.js')

let dataStorer = new dataStorerClass()

app.get('/set', (req, res) => {
  let params = url.parse(req.url, true).query

  dataStorer.set(params)
  res.send('Data stored successfully')
})

app.get('/get', (req, res) => {
  let params = url.parse(req.url, true).query

  res.send(dataStorer.get(params))
})

app.listen(port)

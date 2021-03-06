const express = require('express')
const url = require('url')
const server = express()
const port = 4000
const managerExports = require('./data-manager.js')
const storeExports = require('./data-store.js')

let dataStore = new storeExports.DataStore()
let dataManager = new managerExports.DataManager(dataStore)

server.get('/set', (req, res) => {
  let params = url.parse(req.url, true).query

  res.send(dataManager.set(params))
})

server.get('/get', (req, res) => {
  let params = url.parse(req.url, true).query

  res.send(dataManager.get(params))
})

server.listen(port)

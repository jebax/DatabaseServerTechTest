const express = require('express')
const app = express()
const port = 3000

app.get('/set', (req, res) => {
  res.send('')
})

app.get('/get', (req, res) => {
  res.send('testValue')
})

app.listen(port)

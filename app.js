const jsonServer = require('json-server')
const app = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const express = require('express')

app.use(middlewares)
app.use(router)

app.get('/health', (req, res) => {
  res.send('ok')
})
app.use(express.static('build'))

app.listen( process.env.PORT || 5000, () => {
  console.log('JSON Server is running')
})




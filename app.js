const jsonServer = require('json-server')
const app = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()
const express = require('express')

const PORT = process.env.PORT || 5000

app.use(middlewares, router)

app.get('/health', (req, res) => {
  res.send('ok')
})
app.use(express.static('build'))



app.listen( PORT, () => {
  console.log(`JSON Server is running on ${PORT}`)
})




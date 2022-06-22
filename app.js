const jsonServer = require('json-server')
const app = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

app.use(middlewares)
app.use(router)
app.listen(5000, () => {
  console.log('JSON Server is running')
})


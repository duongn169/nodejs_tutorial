const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! vs Hoang Duong')
})
app.get('/about', (req, res) => {
    res.send(`I'm Hoang Duong`)
  })
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
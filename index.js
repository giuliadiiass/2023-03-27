const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello Giulia! </h1>')
})

app.listen(port, () => {
  console.log(`Acesse o endereço http://localhost ${port} para ver o site`)
})
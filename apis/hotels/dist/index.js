const express = require('express')
const app = express()
const port = 3030

app.get('/', (req, res) => {
  res.send('This is the Magallanes Hotels API!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
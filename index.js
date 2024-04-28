const express = require('express')
const config = require('./src/config/index')
const mongoose = require('./src/database/index')
const bodyParser = require('body-parser')
const path = require('path')
const mainRouter = require('./src/routes/main')
const app = express()

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'src', 'public')))

app.use(mainRouter)
app.listen(config.app.port, () => {
  console.log(`Server is running on port ${config.app.port}`)
})
module.exports = app

const express = require('express')
const config = require('./src/config/index')
const mongoose = require('./src/database/index')
const bodyParser = require('body-parser')
const path = require('path')
const mainRouter = require('./src/routes/main')
const gamesRouter = require('./src/routes/games')
const categoriesRouter = require('./src/routes/categories')
const usersRouter = require('./src/routes/users')
const cors = require('./src/middlewares/cors')
const app = express()

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})
// app.use(cors)
app.use(bodyParser.json())
app.use(express.static(path.join(__dirname, 'src', 'public')))

app.use(mainRouter, gamesRouter, categoriesRouter, usersRouter)
app.listen(config.app.port, () => {
  console.log(`Server is running on port ${config.app.port}`)
})
module.exports = app

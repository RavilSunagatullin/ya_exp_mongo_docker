const gamesRouter = require('express').Router()

const { findAllGames, findGameById } = require('../middlewares/games')
const { sendAllGames, sendGameById } = require('../controllers/games')
const { createGame } = require('../middlewares/games')
const { sendGameCreated } = require('../controllers/games')

gamesRouter.get('/games', findAllGames, sendAllGames)
gamesRouter.post('/games', findAllGames, createGame, sendGameCreated)
gamesRouter.get("/games/:id", findGameById, sendGameById);

module.exports = gamesRouter

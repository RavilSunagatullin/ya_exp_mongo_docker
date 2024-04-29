const gamesRouter = require('express').Router()

const {
  findAllGames,
  findGameById,
  updateGame,
  deleteGame,
  checkEmptyFields,
  checkIfCategoriesAvailable,
  checkIfUsersAreSafe,
  checkIsGameExists,
} = require('../middlewares/games')
const { sendAllGames, sendGameById, sendGameUpdated, sendGameDeleted } = require('../controllers/games')
const { createGame } = require('../middlewares/games')
const { sendGameCreated } = require('../controllers/games')

gamesRouter.get('/games', findAllGames, sendAllGames)
gamesRouter.post('/games', findAllGames, checkIsGameExists, checkIfCategoriesAvailable, checkEmptyFields, createGame, sendGameCreated)
gamesRouter.get('/games/:id', findGameById, sendGameById)
gamesRouter.put(
  '/games/:id',
  findGameById,
  checkIfUsersAreSafe,
  checkIfCategoriesAvailable,
  checkEmptyFields,
  updateGame,
  sendGameUpdated,
)
gamesRouter.delete('/games/:id', deleteGame, sendGameDeleted)
module.exports = gamesRouter

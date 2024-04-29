const games = require('../models/game')
const findAllGames = async (req, res, next) => {
  req.gamesArray = await games.find({}).populate('categories').populate('users')
  next()
}
const createGame = async (req, res, next) => {
  try {
    req.game = await games.create(req.body)
    next()
  } catch (error) {
    res.status(400).send('Error creating game')
  }
}
module.exports = { findAllGames, createGame }

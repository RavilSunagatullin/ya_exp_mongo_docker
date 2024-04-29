const users = require('../models/user')
const games = require('../models/game')
const findAllUsers = async (req, res, next) => {
  req.usersArray = await users.find({})
  next()
}
const createUser = async (req, res, next) => {
  try {
    req.user = await users.create(req.body)
    next()
  } catch (error) {
    res.status(400).send('Error creating user')
  }
}
const findUserById = async (req, res, next) => {
  console.log('GET /users/:id')
  try {
    req.user = await users.findById(req.params.id)
    next()
  } catch (error) {
    res.status(404).send({ message: 'User not found' })
  }
}
const updateUser = async (req, res, next) => {
  try {
    req.user = await users.findByIdAndUpdate(req.params.id, req.body)
    next()
  } catch (error) {
    res.status(400).send({ message: 'Error update user' })
  }
}
module.exports = { findAllUsers, createUser, findUserById, updateUser }

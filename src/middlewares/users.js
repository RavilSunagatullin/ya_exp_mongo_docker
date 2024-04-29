const users = require('../models/user')
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
module.exports = { findAllUsers, createUser }

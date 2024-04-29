const usersRouter = require('express').Router()

const { findAllUsers, findUserById } = require('../middlewares/users')
const { sendAllUsers, sendUserById } = require('../controllers/users')
const { createUser } = require('../middlewares/users')
const { sendUserCreated } = require('../controllers/users')

usersRouter.get('/users', findAllUsers, sendAllUsers)
usersRouter.post('/users', findAllUsers, createUser, sendUserCreated)
usersRouter.get('/users/:id', findUserById, sendUserById)
module.exports = usersRouter

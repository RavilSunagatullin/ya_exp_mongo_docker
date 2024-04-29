const usersRouter = require('express').Router()

const {
  findAllUsers,
  findUserById,
  updateUser,
  deleteUser,
  checkEmptyNameAndEmail,
  checkIsUserExists,
} = require('../middlewares/users')
const { sendAllUsers, sendUserById, sendUserUpdated, sendUserDeleted } = require('../controllers/users')
const { createUser } = require('../middlewares/users')
const { sendUserCreated } = require('../controllers/users')

usersRouter.get('/users', findAllUsers, sendAllUsers)
usersRouter.post('/users', findAllUsers, checkIsUserExists, checkEmptyNameAndEmail, createUser, sendUserCreated)
usersRouter.get('/users/:id', findUserById, sendUserById)
usersRouter.put('/users/:id', findUserById, checkEmptyNameAndEmail, updateUser, sendUserUpdated)
usersRouter.delete('/users/:id', deleteUser, sendUserDeleted)
module.exports = usersRouter

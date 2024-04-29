const usersRouter = require('express').Router();

const findAllCategories = require('../middlewares/users');
const sendAllCategories = require('../controllers/users');

usersRouter.get('/users', findAllCategories, sendAllCategories);

module.exports = usersRouter;

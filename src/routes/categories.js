const categoriesRouter = require('express').Router()

const {
  findAllCategories,
  findCategoryById,
  updateCategory,
  deleteCategories,
  checkIsCategoryExists,
  checkEmptyName,
} = require('../middlewares/categories')
const {
  sendAllCategories,
  sendCategoryById,
  sendCategoryUpdated,
  sendCategoryDeleted,
} = require('../controllers/categories')
const { createCategory } = require('../middlewares/categories')
const { sendCategoryCreated } = require('../controllers/categories')

categoriesRouter.get('/categories', findAllCategories, sendAllCategories)
categoriesRouter.post(
  '/categories',
  findAllCategories,
  checkIsCategoryExists,
  checkEmptyName,
  createCategory,
  sendCategoryCreated,
)
categoriesRouter.get('/categories/:id', findCategoryById, sendCategoryById)
categoriesRouter.put('/categories/:id', findCategoryById, updateCategory, sendCategoryUpdated)
categoriesRouter.delete('/categories/:id', deleteCategories, sendCategoryDeleted)
module.exports = categoriesRouter

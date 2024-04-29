const categories = require('../models/category')
const games = require('../models/game')
const findAllCategories = async (req, res, next) => {
  req.categoriesArray = await categories.find({})
  next()
}
const createCategory = async (req, res, next) => {
  try {
    req.category = await categories.create(req.body)
    next()
  } catch (error) {
    res.status(400).send('Error creating category')
  }
}
const findCategoryById = async (req, res, next) => {
  console.log('GET /categories/:id')
  try {
    req.category = await categories.findById(req.params.id)
    next()
  } catch (error) {
    res.status(404).send({ message: 'Category not found' })
  }
}
const updateCategory = async (req, res, next) => {
  try {
    req.category = await categories.findByIdAndUpdate(req.params.id, req.body)
    next()
  } catch (error) {
    res.status(400).send({ message: 'Error update category' })
  }
}
const deleteCategories = async (req, res, next) => {
  try {
    req.category = await categories.findByIdAndDelete(req.params.id)
    next()
  } catch (error) {
    res.status(400).send({ message: 'Error deleting category' })
  }
}
module.exports = { findAllCategories, createCategory, findCategoryById, updateCategory, deleteCategories }

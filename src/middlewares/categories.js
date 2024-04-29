const categories = require('../models/category')
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
module.exports = { findAllCategories, createCategory }

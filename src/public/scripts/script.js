import { getData } from './api-interactors.js'
import { addCategoriesEditModeListeners } from './categories-edit-mode.js'
import { renderCategoriesList, renderGames, renderUsersList } from './dom-creators.js'
import { addGamesEditModeListeners } from './games-edit-mode.js'
import {
  addCategoryFormListeners,
  addDeleteCategoryListeners,
  addDeleteGameListeners,
  addDeleteUsersListeners,
  addGameFormListeners,
  addUserFormListeners,
} from './requests.js'
import { addUsersEditModeListeners } from './users-edit-mode.js'

export let gamesState = []
export let usersState = []
export let categoriesState = []

export async function reload(blockName) {
  switch (blockName) {
    case 'games':
      loadGamesBlock()
      break
    case 'users':
      loadUsersBlock()
      break
    case 'categories':
      loadCategoriesBlock()
      break
    default:
      console.log('Unknown block name')
      break
  }
}

;(async function init() {
  await loadGamesBlock()
  await loadCategoriesBlock()
  await loadUsersBlock()
})()

async function loadGamesBlock() {
  gamesState = await getData('/games')
  document.querySelector('.games-list').innerHTML = ''
  renderGames(gamesState)
  addGamesEditModeListeners()
  addGameFormListeners()
  await addDeleteGameListeners()
}

async function loadUsersBlock() {
  usersState = await getData('/users')
  document.querySelector('.users-list').innerHTML = ''
  renderUsersList(usersState)
  addUsersEditModeListeners()
  await addUserFormListeners()
  await addDeleteUsersListeners()
}

async function loadCategoriesBlock() {
  categoriesState = await getData('/categories')
  document.querySelector('.categories-list').innerHTML = ''
  renderCategoriesList(categoriesState)
  addCategoriesEditModeListeners()
  await addCategoryFormListeners()
  await addDeleteCategoryListeners()
}

/* global __DEV */
const log = require('debug')('bundle:store')
import { createStore, applyMiddleware, combineReducers } from 'redux'
import promise from 'redux-simple-promise'
import { routerReducer as routing } from 'react-router-redux'

const reducers = { routing }
export function register (reducer, name) {
  log('registering reducer "%s"', name)
  reducers[name] = reducer
}

export default function configureStore () {
  const middleware = [promise()]

  if (__DEV) {
    middleware.push(require('redux-logger')({ collapsed: true }))
  }

  const createStoreWithMiddleware =
    applyMiddleware(...middleware)(createStore)
  const reducer = combineReducers(reducers)
  const store = createStoreWithMiddleware(reducer)

  return store
}


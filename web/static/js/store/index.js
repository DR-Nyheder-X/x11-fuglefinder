/* global __DEV */
const log = __DEV ? require('debug')('birdie:store') : () => {}
import { createStore, applyMiddleware, combineReducers } from 'redux'
import promise from 'redux-simple-promise'
import { routerReducer as routing } from 'react-router-redux'

const reducers = { routing }
export function register (obj) {
  log('registering reducer(s) "%s"', Object.keys(obj).join(', '))
  Object.assign(reducers, obj)
}

export default function configureStore () {
  const middleware = [promise()]

  if (__DEV) {
    middleware.push(
      require('redux-logger')({ collapsed: true })
    )
  }

  const createStoreWithMiddleware =
    applyMiddleware(...middleware)(createStore)
  const reducer = combineReducers(reducers)
  const store = createStoreWithMiddleware(reducer)

  return store
}


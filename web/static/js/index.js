import 'babel-polyfill'

import { attach } from 'fastclick'
attach(document.body)

import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import configureStore from './store'
const store = configureStore()
const history = syncHistoryWithStore(browserHistory, store)

import routes from './routes'
import NotNative from './components/NotNative'

const mount = document.getElementById('root')

if (navigator.standalone || window.localStorage.getItem('_native') === '1') {
  render(
    <Provider store={store}>
      <Router history={history} routes={routes} />
    </Provider>,
    mount
  )
} else {
  render(<NotNative />, mount)
}


/* global __DEV */

import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'

class HomePage extends React.Component {
  render () {
    return <h1>Home</h1>
  }
}

export default (
  <Route path='/' component={App}>
    <IndexRoute component={HomePage} />
    {__DEV &&
      <Route
        path='/kitchensink'
        component={require('./components/KitchensinkPage')}
      />
    }
  </Route>
)


/* global __DEV */

import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import BirdsPage from './components/BirdsPage'
import SightingsPage from './components/SightingsPage'

export default (
  <Route path='/' component={App}>
    <IndexRoute component={BirdsPage} />
    <Route path='sightings' component={SightingsPage} />
    {__DEV &&
      <Route
        path='/kitchensink'
        component={require('./components/KitchensinkPage')}
      />
    }
  </Route>
)


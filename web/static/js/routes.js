/* global __DEV */

import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import BirdsPage from './components/BirdsPage'
import SightingsPage from './components/SightingsPage'

export default (
  <Route path='/' component={App}>
    <Route path='birds/:habitat' component={BirdsPage} />
    <Route path='birds' component={BirdsPage} />
    <Route path='sightings' component={SightingsPage} />
    <IndexRoute component={BirdsPage} />
    {__DEV &&
      <Route
        path='/kitchensink'
        component={require('./components/KitchensinkPage')}
      />
    }
  </Route>
)


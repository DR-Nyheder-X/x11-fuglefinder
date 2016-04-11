/* global __DEV */

import React from 'react'
import { Route, IndexRoute } from 'react-router'

import App from './components/App'
import HabitatsPage from './components/HabitatsPage'
import BirdsPage from './components/BirdsPage'
import BirdPage from './components/BirdPage'
import SightingsPage from './components/SightingsPage'

export default (<Route>
  <Route path='/' component={App}>
    <Route path='habitats/:slug' component={BirdsPage} />
    <Route path='habitats' component={HabitatsPage} />
    <Route path='birds/:id' component={BirdPage} />
    <Route path='sightings' component={SightingsPage} />
    <IndexRoute component={HabitatsPage} />
    {__DEV &&
      <Route
        path='/kitchensink'
        component={require('./components/KitchensinkPage')}
      />
    }
  </Route>
</Route>)

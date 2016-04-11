import React, { Component } from 'react'
import { connect } from 'react-redux'
import FullPageNotice from './App/FullPageNotice'
import Api from '../lib/Api'
import { register } from '../store'
import Navigation, { Header, Content } from './Navigation'

/* ACTIONS */

export const CREATE_USER_SIGHTING = 'sightings/CREATE_USER_SIGHTING'
export function createUserSighting (bird) {
  return {
    type: CREATE_USER_SIGHTING,
    payload: { promise: Api.post('/sightings', { bird_id: bird.id }) }
  }
}

/* REDUCER */

export const initialState = {
  sightings: []
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    default: return state
  }
}

register({ sightings: reducer })

/* COMPONENT */

const stateToProps = (state) => ({
  sightings: state.sightings.sightings
})

class SightingsPage extends Component {
  render () {
    const { sightings } = this.props

    return <Navigation>
      <Header title='Mine fund' />
      <Content>
        {sightings.length === 0 && (
          <FullPageNotice to='/' buttonText='Find din første fugl' text='Du har ikke spottet nogen fugle endnu. På med kikkerten.' />
        )}
      </Content>
    </Navigation>
  }
}

export default connect(stateToProps)(SightingsPage)

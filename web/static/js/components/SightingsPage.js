import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './App/Header'
import FullPageNotice from './App/FullPageNotice'
import Api from '../lib/Api'
import { register } from '../store'

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

    return <div>
      <Header title='Mine fund' />
      {sightings.length === 0 && (
        <FullPageNotice to='/' buttonText='Find din første fugl' text='Du har ikke spottet nogen fugle endnu. På med kikkerten.' />
      )}
    </div>
  }
}

export default connect(stateToProps)(SightingsPage)

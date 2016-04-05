import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { resolve } from 'redux-simple-promise'
import habitats from '../lib/habitats'
import Header from './App/Header'
import Api from '../lib/Api'
import { register } from '../store'
import BirdTile from './BirdTile'

/* ACTIONS */

export const FETCH_BIRDS_BY_HABITAT = 'birds/FETCH_BIRDS_BY_HABITAT'
export function fetchBirdsByHabitat (habitat) {
  return {
    type: FETCH_BIRDS_BY_HABITAT,
    payload: { promise: Api.get(`/birds?habitat=${habitat}`) }
  }
}

/* REDUCER */

export const initialState = {
  isFetching: false,
  birds: Object.keys(habitats).reduce((obj, key) => {
    obj[key] = []
    return obj
  }, {})
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_BIRDS_BY_HABITAT:
      return { ...state, isFetching: true }
    case resolve(FETCH_BIRDS_BY_HABITAT):
      return {
        ...state,
        isFetching: false,
        birds: {
          ...state.birds,
          [action.payload.habitat]: action.payload.data
        }
      }
    default:
      return state
  }
}

register({ birds: reducer })

/* COMPONENT */

const stateToProps = (state, props) => ({
  birds: state.birds.birds,
  habitat: props.params.habitat
})

class BirdsPage extends Component {
  static propTypes = {
    birds: PropTypes.object,
    dispatch: PropTypes.func.isRequired,
    habitat: PropTypes.string
  }

  componentDidMount () {
    const { habitat, dispatch } = this.props

    dispatch(fetchBirdsByHabitat(habitat))
  }

  render () {
    const { habitat, isFetching } = this.props
    const birds = this.props.birds[habitat]

    if (isFetching) {
      return <h1>Loading</h1>
    }

    return <div className='BirdsPage'>
      <Header title={habitats[habitat]} backButton />
      {birds.map((bird) => <BirdTile key={bird.id} bird={bird} />)}
    </div>
  }
}

export default connect(stateToProps)(BirdsPage)

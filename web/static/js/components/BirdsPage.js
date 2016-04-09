import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { resolve } from 'redux-simple-promise'
import habitats from '../lib/habitats'
import Header from './App/Header'
import Api from '../lib/Api'
import { register } from '../store'
import BirdTile from './BirdTile'
import Filters from './App/Filters'
import { unionBy } from 'lodash'

/* ACTIONS */

export const FETCH_BIRDS_BY_HABITAT = 'birds/FETCH_BIRDS_BY_HABITAT'
export function fetchBirdsByHabitat (habitat) {
  return {
    type: FETCH_BIRDS_BY_HABITAT,
    payload: { promise: Api.get(`/birds?habitat=${habitat}`) }
  }
}

export const FETCH_BIRD = 'birds/FETCH_BIRD'
export function fetchBird (id) {
  return {
    type: FETCH_BIRD,
    payload: { promise: Api.get(`/birds/${id}`) }
  }
}

/* REDUCER */

export const initialState = {
  isFetching: false,
  birds: []
}

export function reducer (state = initialState, action) {
  switch (action.type) {
    case FETCH_BIRDS_BY_HABITAT:
    case FETCH_BIRD:
      return { ...state, isFetching: true }
    case resolve(FETCH_BIRDS_BY_HABITAT):
      return {
        ...state,
        isFetching: false,
        birds: unionBy(state.birds, action.payload.data, 'id')
      }
    case resolve(FETCH_BIRD):
      return {
        ...state,
        isFetching: false,
        birds: unionBy(state.birds, [action.payload.data], 'id')
      }
    default:
      return state
  }
}

register({ birds: reducer })

/* COMPONENT */

const stateToProps = (state, props) => {
  const slug = props.params.slug
  const filters = state.filters

  return {
    slug,
    birds: filterBirds(state.birds.birds, { slug, filters })
  }
}

const filterBirds = (birds, { slug, filters }) => {
  return birds.filter((bird) => {
    if (!bird.habitats.includes(slug)) { return false }
    if (filters.size && bird.size !== filters.size) { return false }
    if (filters.query !== '' &&
        !bird.name.toLowerCase().includes(filters.query)) { return false }

    return true
  })
}

class BirdsPage extends Component {
  static propTypes = {
    birds: PropTypes.arrayOf(PropTypes.object.isRequired),
    dispatch: PropTypes.func.isRequired,
    slug: PropTypes.string
  }

  componentDidMount () {
    const { slug, dispatch } = this.props

    dispatch(fetchBirdsByHabitat(slug))
  }

  handleFoundClick (bird) {
    return (event) => {
      console.log(bird, event)
    }
  }

  render () {
    const { slug, isFetching, dispatch } = this.props
    const birds = this.props.birds

    if (isFetching) {
      return <h1>Loading</h1>
    }

    return <div className='BirdsPage'>
      <Header title={habitats[slug]} showBackButton to='/' dispatch={dispatch} />
      <Filters searchIsFocused={false} />
      <div className='BirdTiles'>
        {birds.map((bird) => (
          <BirdTile
            key={bird.id}
            to={`/birds/${bird.id}`}
            bird={bird}
            onFoundClick={::this.handleFoundClick(bird)}
          />
        ))}
      </div>
    </div>
  }
}

export default connect(stateToProps)(BirdsPage)

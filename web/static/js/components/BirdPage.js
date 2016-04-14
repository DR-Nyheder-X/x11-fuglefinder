import React, { Component, PropTypes } from 'react'
import Swipeable from 'react-swipeable'
import { goBack } from 'react-router-redux'
import { connect } from 'react-redux'
import { find } from 'lodash'
import { fetchBird } from './BirdsPage'
import Card from './App/Card'
import Navigation, { Header, Content } from './Navigation'
import { createUserSighting, deleteUserSighting } from './SightingsPage'
import openShareWindow from '../lib/openShareWindow'

const stateToProps = (state, props) => {
  const id = parseInt(props.params.id, 10)
  return {
    id,
    bird: find(state.birds.birds, {id}),
    found: !!find(state.sightings.sightings, {id})
  }
}

class BirdPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    bird: PropTypes.object,
    found: PropTypes.bool.isRequired
  }

  componentDidMount () {
    const { bird, dispatch, id } = this.props

    if (!bird) {
      dispatch(fetchBird(id))
    }
  }

  handleFoundClick (event) {
    const { dispatch, found, bird } = this.props
    dispatch(found ? deleteUserSighting(bird) : createUserSighting(bird))
  }

  handleShareClick (event) {
    const { bird } = this.props
    const url = `https://fugle.drdinstem.me/og/birds/${bird.id}`
    openShareWindow(url)
  }

  render () {
    const { bird, found, dispatch } = this.props

    if (!bird) {
      return <div>...</div>
    }

    return <Navigation>
      <Header showBackButton dispatch={dispatch} />
      <Content>
        <Swipeable onSwipedRight={() => { dispatch(goBack()) }}>
          <Card
            bird={bird} found={found}
            onFoundClick={::this.handleFoundClick}
            onShareClick={::this.handleShareClick}
          />
        </Swipeable>
      </Content>
    </Navigation>
  }
}

export default connect(stateToProps)(BirdPage)

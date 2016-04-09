import React, { Component, PropTypes } from 'react'
import { fetchBird } from './BirdsPage'
import { connect } from 'react-redux'

const stateToProps = (state, props) => {
  const id = parseInt(props.params.id, 10)
  return {
    id,
    bird: state.birds.birds.find((bird) => bird.id === id)
  }
}

class BirdPage extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    id: PropTypes.number.isRequired,
    bird: PropTypes.object
  }

  componentDidMount () {
    const { bird, dispatch, id } = this.props

    if (!bird) {
      dispatch(fetchBird(id))
    }
  }

  render () {
    const { id, bird } = this.props

    return <div>
      {id}
      {JSON.stringify(bird)}
    </div>
  }
}

export default connect(stateToProps)(BirdPage)

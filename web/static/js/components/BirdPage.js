import React, { Component, PropTypes } from 'react'
import { fetchBird } from './BirdsPage'
import { connect } from 'react-redux'
import {
  Header as CardHeader,
  Image,
  Description,
  Footer
} from './App/Card'
import Header from './App/Header'

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
    const { bird, dispatch } = this.props

    if (!bird) {
      return <div>...</div>
    }

    return <div>
      <Header showBackButton dispatch={dispatch} />
      <CardHeader bird={bird} />
      <Image bird={bird} />
      <Description bird={bird} />
      <Footer bird={bird} found={false} />
    </div>
  }
}

export default connect(stateToProps)(BirdPage)

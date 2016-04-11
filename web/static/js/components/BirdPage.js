import React, { Component, PropTypes } from 'react'
import { fetchBird } from './BirdsPage'
import { connect } from 'react-redux'
import {
  Header as CardHeader,
  Image,
  Description,
  Footer
} from './App/Card'
import Navigation, { Header, Content } from './Navigation'

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

    return <Navigation>
      <Header showBackButton dispatch={dispatch} />
      <Content>
        <CardHeader bird={bird} />
        <Image bird={bird} />
        <Description bird={bird} />
        <Footer bird={bird} found={false} />
      </Content>
    </Navigation>
  }
}

export default connect(stateToProps)(BirdPage)

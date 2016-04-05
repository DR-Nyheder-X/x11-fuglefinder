import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import habitats from '../lib/habitats'
import Header from './App/Header'

const stateToProps = (state, props) => ({
  habitat: props.params.habitat
})

class BirdsPage extends Component {
  static propTypes = {
    habitat: PropTypes.string
  }

  render () {
    const { habitat } = this.props

    return <div className='BirdsPage'>
      <Header title={habitats[habitat]} backButton />
    </div>
  }
}

export default connect(stateToProps)(BirdsPage)

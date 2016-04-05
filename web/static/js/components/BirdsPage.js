import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import HabitatList from './HabitatList'
import BirdsList from './BirdsList'
import Header from './App/Header'

const stateToProps = (state, props) => ({
  habitat: props.params.habitat
})

class BirdsPage extends Component {
  render () {
    const { habitat } = this.props

    return <div className='BirdsPage'>
      {!!habitat && <Header title={habitat} backButton />}
      {!!habitat && <BirdsList habitat={habitat} />}
      {!!habitat || <Header />}
      {!!habitat || <HabitatList />}
    </div>
  }
}

BirdsPage.propTypes = {
  habitat: PropTypes.string
}

export default connect(stateToProps)(BirdsPage)

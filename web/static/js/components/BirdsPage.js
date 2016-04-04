import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import HabitatList from './HabitatList'
import BirdsList from './BirdsList'

const stateToProps = (state, props) => ({
  habitat: props.params.habitat
})

class BirdsPage extends Component {
  render () {
    const { habitat } = this.props

    return <div className='BirdsPage'>
      {!!habitat && <BirdsList habitat={habitat} />}
      {!!habitat || <HabitatList />}
    </div>
  }
}

BirdsPage.propTypes = {
  habitat: PropTypes.string
}

export default connect(stateToProps)(BirdsPage)

import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { register } from '../store'
import './App.css'
import Api from '../Api'

export const FETCH_CURRENT_USER = 'app/FETCH_CURRENT_USER'
export function fetchCurrentUser () {
  return {
    type: FETCH_CURRENT_USER,
    payload: { promise: Api.fetchCurrentUser() }
  }
}

const initialState = {
  current_user: null
}

export function reducer (state = initialState, action) {
  return state
}

register({ app: reducer })

const stateToProps = (state) => ({
})

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.dispatch(fetchCurrentUser())
  }

  render () {
    return <div className='App'>
      <h5>Appediapp</h5>
      {this.props.children}
    </div>
  }
}

export default connect(stateToProps)(App)

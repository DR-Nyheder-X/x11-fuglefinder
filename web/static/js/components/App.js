import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { register } from '../store'
import { resolve } from 'redux-simple-promise'
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
  switch (action.type) {
    case resolve(FETCH_CURRENT_USER): return {
      ...state,
      current_user: action.payload.user
    }

    default: return state
  }
}

register({ app: reducer })

const stateToProps = (state) => ({
  user: state.app.current_user
})

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired
  }

  componentDidMount () {
    this.props.dispatch(fetchCurrentUser())
  }

  render () {
    const { user, children } = this.props

    if (!user) {
      return <div>&hellip;</div>
    }

    return <div className='App'>
      <TitleBar />
      <Content children={children} />
      <TabBar />
    </div>
  }
}

function Content ({ children }) {
  return <div className='Content'>
    {children}
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
    <p>thing</p>
  </div>
}

function TitleBar () {
  return <div className='TitleBar'>
    TitleBar
  </div>
}

function TabBar () {
  return <div className='TabBar'>
    TabBar
  </div>
}

export default connect(stateToProps)(App)

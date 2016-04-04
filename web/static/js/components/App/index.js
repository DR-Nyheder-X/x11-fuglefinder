import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { resolve } from 'redux-simple-promise'
import { register } from '../../store'
import Api from '../../lib/Api'
import TabBar, {
  TabBarButton,
  TabBarContent,
  TabBarNavigation
} from './TabBar'
import './App.css'

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
    case resolve(FETCH_CURRENT_USER):
      return { ...state, current_user: action.payload.user }

    default:
      return state
  }
}

register({ app: reducer })

const stateToProps = (state) => ({
  user: state.app.current_user,
  pathname: state.routing.locationBeforeTransitions.pathname
})

class App extends Component {
  static propTypes = {
    dispatch: PropTypes.func.isRequired,
    user: PropTypes.object,
    pathname: PropTypes.string.isRequired
  }

  componentDidMount () {
    this.props.dispatch(fetchCurrentUser())
  }

  render () {
    const { user, children, pathname } = this.props

    if (!user) {
      return <div>&hellip;</div>
    }

    return <TabBar className='App'>
      <TabBarContent children={children} />
      <TabBarNavigation>
        <TabBarButton to='/' active={pathname === '/'}>
          Alle fugle
        </TabBarButton>
        <TabBarButton to='/sightings' active={pathname === '/sightings'}>
          Mine fund
        </TabBarButton>
      </TabBarNavigation>
    </TabBar>
  }
}

export default connect(stateToProps)(App)

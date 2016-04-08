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
        <TabBarButton to='/' active={pathname === '/' || !!pathname.match(/^\/habitats/)}>
          <div className='TabBarButton-inner'>
            <BirdIcon />
            <span>Alle fugle</span>
          </div>
        </TabBarButton>
        <TabBarButton to='/sightings' active={!!pathname.match(/^\/sightings/)}>
          <div className='TabBarButton-inner'>
            <EyeIcon />
            <span>Mine fund</span>
          </div>
        </TabBarButton>
      </TabBarNavigation>
    </TabBar>
  }
}

function BirdIcon () {
  return <svg width='33px' height='18px' viewBox='0 0 33 18'>
    <path d='M14.3958745,10.9990341 C14.4305057,10.9996771 14.4652151,11 14.5,11 C17.110352,11 19.2959726,9.18150862 19.8591252,6.74226245 L22.5537928,5.93386215 C23.3565734,5.69302797 23.352511,5.3057533 22.5537928,5.06613785 L19.8591252,4.25773755 C19.3144145,1.89837096 17.2517599,0.119768341 14.7550402,0.00580843408 L14.7603301,0 C14.7023099,0 14.6446039,0.000226664457 14.5872093,0.000677402307 C14.5581935,0.000226355215 14.5291232,0 14.5,0 C14.4103428,0 14.3211866,0.0021452784 14.23258,0.00638730412 C8.86281235,0.137784424 6.29270018,2.27200893 4.11422807,4.13793608 C2.38028137,5.62311379 2.73342489,6.00866256 4.73368184,5.12942373 C5.42633035,4.82496111 6.20648272,4.52654381 7.05168533,4.27486658 C4.34372138,6.90165104 1.47614546,10.8708036 0.346999355,16.3832347 C0.239486421,16.9081071 0.346999355,18 2.02135417,17.9999999 C3.69570898,17.9999999 14.8463209,18 15.5029802,18 C15.5029802,17.3355236 15.3901625,16.8065643 15.1495934,16.1723843 C14.4574815,14.3478625 11.4873596,13.8190657 11.9927691,12.0007251 C12.1988708,11.2592213 12.5011803,11.0039186 14.3958745,10.9990341 Z' id='big-bird' fill='#A19A8C'></path>
    <path d='M29.5336556,10.5241725 C28.9919421,9.05227803 27.5532674,8 25.8636364,8 C25.2773855,8 24.7213468,8.12668166 24.2225045,8.35361806 C24.2186522,8.35270782 24.2147966,8.35179884 24.2109377,8.35089112 C21.928406,9.40130616 18.4551717,12.7406073 17.0520341,18 C17.0520341,17.9999999 26.9226603,18.0000002 26.9226603,18.0000002 C28.0274069,18.0000002 29.1188097,17.1312174 29.3289301,16.0425143 C29.3289301,16.0425143 29.8054865,14.3636548 29.6968355,12.5926336 L31.8057425,11.9482454 C32.4651851,11.746749 32.4653127,11.4199567 31.8057425,11.2184213 L29.5336556,10.5241725 Z' id='small-bird' fill='#A1998C'></path>
    <ellipse id='small-bird-eye' fill='#FEFBEE' cx='26.4545455' cy='10.3333333' rx='0.818181818' ry='0.833333333'></ellipse>
    <circle id='big-bird-eye' fill='#FEFBEE' cx='16' cy='4' r='1'></circle>
  </svg>
}

function EyeIcon () {
  return <svg width='31px' height='17px' viewBox='0 0 31 17'>
    <path d='M0.69708252,8.5 C0.69708252,9.26373291 1.26989747,9.77954107 1.26989746,9.77954102 C6.8596115,14.3497727 10.0209079,17 15.5,17 C20.9790921,17 24.1403885,14.3497727 29.7301025,9.77954102 C29.7301025,9.77954107 30.3029175,9.26373291 30.3029175,8.5 C30.3029175,7.73626709 29.7301025,7.22045893 29.7301025,7.22045898 C24.1403885,2.65022725 20.9790921,0 15.5,0 C10.0209079,0 6.8596115,2.65022725 1.26989746,7.22045898 C1.26989747,7.22045893 0.69708252,7.73626709 0.69708252,8.5 Z' id='Combined-Shape' fill='#A19B8C'></path>
    <circle id='iris' fill='#FEFBEE' cx='15.5' cy='8.5' r='6.5'></circle>
    <path d='M18.7815021,7.28000212 C18.9227887,7.65987708 19,8.07092171 19,8.5 C19,10.4329966 17.4329966,12 15.5,12 C13.5670034,12 12,10.4329966 12,8.5 C12,6.56700338 13.5670034,5 15.5,5 C15.9290783,5 16.3401229,5.07721129 16.7199979,5.21849788 C16.288244,5.48185296 16,5.95726499 16,6.5 C16,7.32842712 16.6715729,8 17.5,8 C18.042735,8 18.518147,7.71175605 18.7815021,7.28000212 Z' id='pupil' fill='#A19A8C'></path>
  </svg>
}

export default connect(stateToProps)(App)

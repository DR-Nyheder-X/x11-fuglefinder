import React, { Component } from 'react'
import HabitatList from './HabitatList'
import Navigation, { Header, Content } from './Navigation'

export default class HabitatsPage extends Component {
  render () {
    return <Navigation className='HabitatsPage'>
      <Header />
      <Content>
        <HabitatList />
      </Content>
    </Navigation>
  }
}

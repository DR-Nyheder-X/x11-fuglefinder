import React, { Component } from 'react'
import HabitatList from './HabitatList'
import Header from './App/Header'

export default class HabitatsPage extends Component {
  render () {
    return <div className='HabitatsPage'>
      <Header />
      <HabitatList />
    </div>
  }
}

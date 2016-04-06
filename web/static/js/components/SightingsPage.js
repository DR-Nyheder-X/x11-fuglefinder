import React, { Component } from 'react'
import Header from './App/Header'
import FullPageNotice from './App/FullPageNotice'

export default class SightingsPage extends Component {
  render () {
    return <div>
      <Header title='Mine fund' />
      <FullPageNotice to='/' buttonText='Find din første fugl' text='Du har ikke spottet nogen fugle endnu. På med kikkerten.' />
    </div>
  }
}

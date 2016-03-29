import React, { Component } from 'react'
import './App.css'

export default class App extends Component {
  render () {
    return <div className='App'>
      <h5>Appediapp</h5>
      {this.props.children}
    </div>
  }
}

import React, { Component } from 'react'
import Header from './App/Header'

export default class KitchensinkPage extends Component {
  render () {
    return <div>
      <img style={{width:'100%'}} src='http://s3.amazonaws.com/wolty/media/56/original/Kitchen_Sink.jpeg?1305542976' />
      <Header />
      <Header title='Ellen Page' />
      <Header title='Jimmy Page' backButton={true} />
    </div>
  }
}

// Support require(..) to only include in dev env
module.exports = KitchensinkPage

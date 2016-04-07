import React, { Component } from 'react'
import Header from './App/Header'
import BirdTile from './BirdTile'

const sampleBird = {
  name: "Johnfugl"
}

export default class KitchensinkPage extends Component {
  render () {
    return <div>
      <p>&nbsp;</p>
      <p>&nbsp;</p>

      <Header />
      <Header title='Ellen Page' />
      <Header title='Jimmy Page' backButton />
      <img style={{width: '100%'}} src='http://s3.amazonaws.com/wolty/media/56/original/Kitchen_Sink.jpeg?1305542976' />
      <BirdTile bird={sampleBird} habitat={'coast'} found />
      <BirdTile bird={sampleBird} habitat={'coast'} />

      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
    </div>
  }
}

// Support require(..) to only include in dev env
module.exports = KitchensinkPage

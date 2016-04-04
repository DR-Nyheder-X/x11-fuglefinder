import React, { Component } from 'react'

export default class KitchensinkPage extends Component {
  render () {
    return <div>
      <img src='http://s3.amazonaws.com/wolty/media/56/original/Kitchen_Sink.jpeg?1305542976' />
    </div>
  }
}

// Support require(..) to only include in dev env
module.exports = KitchensinkPage

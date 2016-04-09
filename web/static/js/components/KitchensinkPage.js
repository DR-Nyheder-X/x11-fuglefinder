import React, { Component } from 'react'
import Header from './App/Header'
import Filters from './App/Filters'
import BirdTile from './BirdTile'
import BirdTileCompact from './BirdTileCompact'
import Card from './App/Card'
import './Kitchensink.css'

const sampleBird = {
  name: "Splitfjamset snydestær"
}

export default class KitchensinkPage extends Component {
  render () {
    return <div className='Kitchensink'>
      <Header />
      <Header title='Ellen Page' />
      <Header title='Jimmy Page' backButton />
      <Filters />
      <Filters searchIsFocused />
      <Filters sizeDropdownIsOpen />
      <img style={{width: '100%'}} src='http://s3.amazonaws.com/wolty/media/56/original/Kitchen_Sink.jpeg?1305542976' />
      <BirdTileCompact title='Stenpikker' />
      <BirdTileCompact title='Stenpikker' found />
      <Card title='Sjatfedtet stumflamingo' />
      <Card title='Sjatfedtet stumflamingo' found />
      <Card title='Sjatfedtet stumflamingo' fitForModal />
      <Card title='Sjatfedtet stumflamingo' found fitForModal />
      <div className='BirdTiles'>
        <BirdTile bird={sampleBird} habitat={'coast'} found />
        <BirdTile bird={sampleBird} habitat={'coast'} />
      </div>
    </div>
  }
}

// Support require(..) to only include in dev env
module.exports = KitchensinkPage

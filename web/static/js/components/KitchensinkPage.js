import React, { Component } from 'react'
import { Header } from './Navigation'
import Filters from './App/Filters'
import ShareNotice from './App/ShareNotice'
import BirdTile from './BirdTile'
import NotNative from './NotNative'
import BirdTileCompact from './BirdTileCompact'
import Card from './App/Card'
import './Kitchensink.css'

const sampleBird = {
  name: 'Splitfjamset snydestær',
  rarity: 3,
  picture: {
    tile: 'http://thunderfluff.com/fuglefinder/bird.jpg',
    single: 'http://thunderfluff.com/fuglefinder/bird.jpg'
  },
  fact: 'Har engang været i byen med Jens Okking. De endte på Grok, men det endte ikke godt.',
  latin_name: 'Coitus Fluxus',
  english_name: 'Thingamachine'
}

export default class KitchensinkPage extends Component {
  render () {
    return <div className='Kitchensink'>
      <Header />
      <Header title='Ellen Page' />
      <Header title='Jimmy Page' showBackButton dispatch={() => {}} />
      <Filters />
      <img style={{width: '100%'}} src='http://s3.amazonaws.com/wolty/media/56/original/Kitchen_Sink.jpeg?1305542976' />
      <ShareNotice />
      <BirdTileCompact title='Bitter svulmeklyde' />
      <BirdTileCompact title='Stenpikker' found />
      <Card bird={sampleBird} />
      <Card bird={sampleBird} found />
      <Card bird={sampleBird} fitForModal />
      <Card bird={sampleBird} found fitForModal />
      <div className='BirdTiles'>
        <BirdTile bird={sampleBird} to={'/'} found />
        <BirdTile bird={sampleBird} to={'/'} />
      </div>
    </div>
  }
}

// Support require(..) to only include in dev env
module.exports = KitchensinkPage

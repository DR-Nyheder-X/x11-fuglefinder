import React, { Component } from 'react'
import TabBar, {
  TabBarButton,
  TabBarContent,
  TabBarNavigation
} from './App/TabBar'
import times from 'lodash/times'
import BirdTile from './BirdTile'
import Navigation, {
  Header as NavigationHeader,
  Content
} from './Navigation'
import Header from './App/Header'

export default class UI extends Component {
  render () {
    return <TabBar className='App'>
      <TabBarContent>
        <Navigation>
          <NavigationHeader>
            <Header />
          </NavigationHeader>
          <Content>
            {times(20).map((i) => (
              <BirdTile key={i} bird={sampleBird} to='/' />
            ))}
          </Content>
        </Navigation>
      </TabBarContent>
      <TabBarNavigation>
        <TabBarButton to={'/'}>
          <span>A</span>
        </TabBarButton>
        <TabBarButton to={'/'}>
          <span>B</span>
        </TabBarButton>
      </TabBarNavigation>
    </TabBar>
  }
}

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


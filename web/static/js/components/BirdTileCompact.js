import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Rating from './App/Rating'
import classname from 'classname'
import './BirdTileCompact.css'

export default function BirdTileCompact ({ title, found }) {
  const cls = classname('BirdTileCompact', {
    'BirdTileCompact--found': found
  })

  return <div className={cls}>
    <div className='BirdTileCompact-inner'>
      <header className='BirdTileCompact-header'>
        <Link to={`#`}>
          {title}
        </Link>
      </header>
      <div className='BirdTileCompact-image'>
        <Link to={`#`}>
          <img src='http://thunderfluff.com/fuglefinder/bird.jpg' />
        </Link>
      </div>
      <div className='BirdTileCompact-rating'>
        <Rating rating={4} />
      </div>
    </div>
  </div>
}

BirdTileCompact.propTypes = {
  title: PropTypes.string,
  found: PropTypes.bool
}

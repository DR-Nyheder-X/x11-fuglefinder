import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Rating from './App/Rating'
import classname from 'classname'
import './BirdTileCompact.css'

export default function BirdTileCompact ({ bird, found }) {
  const cls = classname('BirdTileCompact', {
    'BirdTileCompact--found': found
  })

  return <Link to={`/birds/${bird.id}`} className={cls}>
    <div className='BirdTileCompact-inner'>
      <header className='BirdTileCompact-header'>
        {bird.name}
      </header>
      <div className='BirdTileCompact-image'>
        <img src={bird.picture.list} />
      </div>
      <div className='BirdTileCompact-rating'>
        <Rating rating={bird.rarity} />
      </div>
    </div>
  </Link>
}

BirdTileCompact.propTypes = {
  bird: PropTypes.object.isRequired,
  found: PropTypes.bool
}

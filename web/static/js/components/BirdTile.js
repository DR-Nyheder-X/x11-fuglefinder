import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Rating from './App/Rating'
import classname from 'classname'
import './BirdTile.css'

export default function BirdTile ({ bird, to, found, onFoundClick }) {
  const cls = classname('BirdTile', {
    'BirdTile--found': found
  })

  return <div className={cls}>
    <div className='BirdTile-inner'>
      <header className='BirdTile-header'>
        <Link to={to}>
          {bird.name}
        </Link>
        <button className='BirdTile-found' onClick={onFoundClick}></button>
      </header>
      <div className='BirdTile-image'>
        <Link to={to}>
          <img src={bird.picture.tile} alt='' />
        </Link>
      </div>
      <div className='BirdTile-rating'>
        <Rating rating={bird.rarity} />
      </div>
    </div>
  </div>
}

BirdTile.propTypes = {
  bird: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired,
  found: PropTypes.bool,
  onFoundClick: PropTypes.func
}

import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Rating from './App/Rating'
import './BirdTile.css'

export default function BirdTile ({ bird, habitat }) {
  return <div className='BirdTile'>
    <div className='BirdTile-inner'>
      <header className='BirdTile-header'>
        <Link to={`/habitats/${habitat}/${bird.id}`}>
          {bird.name}
        </Link>
        <button className='BirdTile-found'>F/NF</button>
      </header>
      <div className='BirdTile-image'>
        <Link to={`/habitats/${habitat}/${bird.id}`}>
          <img src='http://thunderfluff.com/fuglefinder/bird.jpg' />
        </Link>
      </div>
      <div className='BirdTile-rating'>
        <Rating rating='1' />
      </div>
    </div>
  </div>
}

BirdTile.propTypes = {
  bird: PropTypes.object.isRequired
}

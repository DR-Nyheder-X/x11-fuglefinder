import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default function BirdTile ({ bird, habitat }) {
  return <div className='BirdTile'>
    <Link to={`/habitats/${habitat}/${bird.id}`}>
      {bird.name}
    </Link>
  </div>
}

BirdTile.propTypes = {
  bird: PropTypes.object.isRequired
}

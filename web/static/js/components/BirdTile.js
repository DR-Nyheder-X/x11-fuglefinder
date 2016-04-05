import React, { PropTypes } from 'react'

export default function BirdTile ({ bird }) {
  return <div className='BirdTile'>
    {bird.name}
  </div>
}

BirdTile.propTypes = {
  bird: PropTypes.object.isRequired
}

import React, { PropTypes } from 'react'

export default function BirdsList ({ habitat }) {
  return <div className='BirdsList'>
    <h1>{habitat}</h1>
  </div>
}

BirdsList.propTypes = {
  habitat: PropTypes.string.isRequired
}

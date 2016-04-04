import React from 'react'
import habitats from '../lib/habitats'
import SectionLink from './SectionLink'

export default function HabitatList () {
  return <div className='HabitatList'>
    {Object.keys(habitats).map((key) => (
      <SectionLink
        key={key}
        to={`/birds/${habitats[key]}`}
        children={key}
      />
    ))}
  </div>
}


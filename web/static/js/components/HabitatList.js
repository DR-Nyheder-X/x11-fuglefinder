import React from 'react'
import habitats from '../lib/habitats'
import SectionLink from './SectionLink'
import './HabitatList.css'

export default function HabitatList () {
  return <div className='HabitatList'>
    <div className='HabitatList-guide'>
      Hvor er du?
    </div>
    <div className='HabitatList-items'>
      {Object.keys(habitats).map((key) => (
        <SectionLink
          key={key}
          to={`/birds/${habitats[key]}`}
          children={key}
        />
      ))}
    </div>
  </div>
}

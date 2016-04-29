import React from 'react'
import habitats from '../lib/habitats'
import SectionLink from './SectionLink'
import './HabitatList.css'

export default function HabitatList () {
  return <div className='HabitatList'>
    <div className='HabitatList-guide'>
      <span>Vælg område</span>
    </div>
    <div className='HabitatList-items'>
      {Object.keys(habitats).map((key) => (
        <SectionLink key={key}
          to={`/habitats/${key}`}
          children={habitats[key]}
        />
      ))}
      <SectionLink to={'/birds'} className='SectionLink--all-birds'>Alle fugle</SectionLink>
    </div>
  </div>
}

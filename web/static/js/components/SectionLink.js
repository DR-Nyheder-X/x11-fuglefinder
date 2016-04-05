import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import './SectionLink.css'

export default function SectionLink ({ to, children }) {
  return <Link to={to} className='SectionLink'>
    <span>{children}</span>
    <span className='SectionLink-arrow'>
      <svg width='20px' height='16px' viewBox='0 0 20 16'>
        <path transform='translate(-17, -18)' fill='#000000' d='M29.1715729,24 L26.5857864,21.4142136 C25.8047379,20.633165 25.8047379,19.366835 26.5857864,18.5857864 C27.366835,17.8047379 28.633165,17.8047379 29.4142136,18.5857864 L35.2396982,24.4112711 C35.7169056,24.7767889 36.0246457,25.3524562 36.0246457,26 C36.0246457,26.6475438 35.7169056,27.2232111 35.2396982,27.5887289 L29.4142136,33.4142136 C28.633165,34.1952621 27.366835,34.1952621 26.5857864,33.4142136 C25.8047379,32.633165 25.8047379,31.366835 26.5857864,30.5857864 L29.1715729,28 L19,28 C17.8954305,28 17,27.1045695 17,26 C17,24.8954305 17.8954305,24 19,24 L29.1715729,24 Z' id='arrow'></path>
      </svg>
    </span>
  </Link>
}

SectionLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string
}

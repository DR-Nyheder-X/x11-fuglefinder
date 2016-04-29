import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import './SectionLink.css'
import classname from 'classname'

export default function SectionLink ({ to, children, className }) {
  const cls = classname('SectionLink', className)

  return <Link to={to} className={cls}>
    <span>{children}</span>
    <span className='SectionLink-arrow'>
      <svg width='19px' height='20px' viewBox='0 0 19 20'>
        <g id='Page-1' stroke='none' stroke-width='1' fill='none' fill-rule='evenodd'>
          <path d='M9.7383297,20 L15.2478445,14.4904852 L15.2530483,14.495689 L18.0829511,11.6657862 C18.8605228,10.8882145 18.8643024,9.62166169 18.0854475,8.84280681 L17.518464,8.27582326 C17.4725862,8.22304558 17.4245543,8.171506 17.3743687,8.12132034 L15.2530483,6 L15.2478445,6.00520382 L9.24264069,2.90878432e-14 L0.757359313,2.84217094e-14 L11.0052038,10.2478445 L1.25304833,20 L9.7383297,20 Z' fill='#314560'></path>
        </g>
      </svg>
    </span>
  </Link>
}

SectionLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string,
  className: PropTypes.string
}

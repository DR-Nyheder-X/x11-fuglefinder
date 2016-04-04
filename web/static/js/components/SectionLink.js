import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import './SectionLink.css'

export default function SectionLink ({ to, children }) {
  return <Link to={to} className='SectionLink'>{children}</Link>
}

SectionLink.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string
}

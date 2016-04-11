import React, { PropTypes } from 'react'
import NavHeader from './Header'

require('./Navigation.css')

export default function Navigation ({ children }) {
  return <div className='Navigation' children={children} />
}

Navigation.propTypes = {
  children: PropTypes.node
}

export function Content ({ children }) {
  return <div className='NavigationContent' children={children} />
}

Content.propTypes = {
  children: PropTypes.node
}

export const Header = NavHeader

import React, { PropTypes } from 'react'

require('./Navigation.css')

export default function Navigation ({ children }) {
  return <div className='Navigation' children={children} />
}

Navigation.propTypes = {
  children: PropTypes.node
}

export function Header ({ children }) {
  return <div className='NavigationHeader' children={children} />
}

Header.propTypes = {
  children: PropTypes.node
}

export function Content ({ children }) {
  return <div className='NavigationContent' children={children} />
}

Content.propTypes = {
  children: PropTypes.node
}


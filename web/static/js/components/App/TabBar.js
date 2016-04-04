import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classname from 'classname'
import './TabBar.css'
import './TabBarNavigation.css'

export default function TabBar ({ children }) {
  return <div className='TabBar'>
    {children}
  </div>
}

TabBar.propTypes = {
  children: PropTypes.node
}

export function TabBarButton ({ to, children, active }) {
  const cls = classname('TabBarButton', { active })
  return <Link className={cls} to={to} children={children} />
}

TabBarButton.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  to: PropTypes.string
}

TabBarButton.defaultProps = {
  active: false
}

export function TabBarContent ({ children }) {
  return <div className='TabBarContent' children={children} />
}

TabBarContent.propTypes = {
  children: PropTypes.node
}

export function TabBarNavigation ({ children }) {
  return <div className='TabBarNavigation' children={children} />
}

TabBarNavigation.propTypes = {
  children: PropTypes.node
}

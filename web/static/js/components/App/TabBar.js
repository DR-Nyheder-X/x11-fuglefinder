import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import classname from 'classname'
import './TabBar.css'

export default function TabBar (props) {
  const { children, className } = props
  const cls = classname('TabBar', className)
  return <div {...props} className={cls} children={children} />
}

TabBar.propTypes = {
  children: PropTypes.node
}

export function TabBarButton (props) {
  const { className, to, children, active } = props
  const cls = classname('TabBarButton', className, { active })
  return <Link {...props} className={cls} to={to} children={children} />
}

TabBarButton.propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  to: PropTypes.string
}

export function TabBarContent (props) {
  const { children, className } = props
  const cls = classname('TabBarContent', className)
  return <div {...props} className={cls} children={children} />
}

TabBarContent.propTypes = {
  children: PropTypes.node
}

export function TabBarNavigation (props) {
  const { children, className } = props
  const cls = classname('TabBarNavigation', className)
  return <div {...props} className={cls} children={children} />
}

TabBarNavigation.propTypes = {
  children: PropTypes.node
}

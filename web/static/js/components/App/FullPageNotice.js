import React, { Component, PropTypes } from 'react'
import { Link } from 'react-router'
import './FullPageNotice.css'

export default class FullPageNotice extends Component {

  render () {
    return <div className='FullPageNotice'>
      <div className='FullPageNotice-inner'>
        <p className='FullPageNotice-text'>{this.props.text}</p>
        <Link className='FullPageNotice-button' to={this.props.to}>
          {this.props.buttonText}
        </Link>
      </div>
    </div>
  }
}

FullPageNotice.propTypes = {
  text: PropTypes.string,
  buttonText: PropTypes.string,
  to: PropTypes.string
}

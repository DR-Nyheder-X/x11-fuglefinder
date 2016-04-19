import React, { Component, PropTypes } from 'react'
import './Rating.css'

const titles = {
  1: 'Ikke sjælden',
  2: 'Lidt sjælden',
  3: 'Sjælden',
  4: 'Meget sjælden',
  5: 'Vildt sjælden'
}

export default class Rating extends Component {
  render () {
    const { showTitle, rating } = this.props

    return <div className={`Rating Rating--${rating}`} data-has-title={showTitle ? 'true' : 'false'}>
      {showTitle &&
        <div className='Rating-title'>{titles[rating]}</div>
      }
      <div className='Rating-stars'>
        <svg width='13px' height='12px' viewBox='0 0 13 12'>
          <polygon id='star-1' fill='#D6CFBE' points='6.5 9.75 2.67939586 11.7586105 3.40906632 7.50430523 0.318132644 4.49138954 4.58969793 3.87069477 6.5 0 8.41030207 3.87069477 12.6818674 4.49138954 9.59093368 7.50430523 10.3206041 11.7586105 '></polygon>
        </svg>
        <svg width='13px' height='12px' viewBox='0 0 13 12'>
          <polygon id='star-2' fill='#D6CFBE' points='6.5 9.75 2.67939586 11.7586105 3.40906632 7.50430523 0.318132644 4.49138954 4.58969793 3.87069477 6.5 0 8.41030207 3.87069477 12.6818674 4.49138954 9.59093368 7.50430523 10.3206041 11.7586105 '></polygon>
        </svg>
        <svg width='13px' height='12px' viewBox='0 0 13 12'>
          <polygon id='star-3' fill='#D6CFBE' points='6.5 9.75 2.67939586 11.7586105 3.40906632 7.50430523 0.318132644 4.49138954 4.58969793 3.87069477 6.5 0 8.41030207 3.87069477 12.6818674 4.49138954 9.59093368 7.50430523 10.3206041 11.7586105 '></polygon>
        </svg>
        <svg width='13px' height='12px' viewBox='0 0 13 12'>
          <polygon id='star-4' fill='#D6CFBE' points='6.5 9.75 2.67939586 11.7586105 3.40906632 7.50430523 0.318132644 4.49138954 4.58969793 3.87069477 6.5 0 8.41030207 3.87069477 12.6818674 4.49138954 9.59093368 7.50430523 10.3206041 11.7586105 '></polygon>
        </svg>
        <svg width='13px' height='12px' viewBox='0 0 13 12'>
          <polygon id='star-5' fill='#D6CFBE' points='6.5 9.75 2.67939586 11.7586105 3.40906632 7.50430523 0.318132644 4.49138954 4.58969793 3.87069477 6.5 0 8.41030207 3.87069477 12.6818674 4.49138954 9.59093368 7.50430523 10.3206041 11.7586105 '></polygon>
        </svg>
      </div>
    </div>
  }
}

Rating.propTypes = {
  showTitle: PropTypes.bool.isRequired,
  rating: PropTypes.number // 1..5
}

Rating.defaultProps = {
  showTitle: false
}

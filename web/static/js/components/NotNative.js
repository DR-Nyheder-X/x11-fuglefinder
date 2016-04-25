import React, { Component } from 'react'
import classname from 'classname'
import { Header } from './Navigation'
import './NotNative.css'

var isMobile = {
  Windows: function () {
    return /IEMobile/i.test(navigator.userAgent)
  },
  Android: function () {
    return /Android/i.test(navigator.userAgent)
  },
  BlackBerry: function () {
    return /BlackBerry/i.test(navigator.userAgent)
  },
  iOS: function () {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent)
  },
  any: function () {
    return (isMobile.Android() || isMobile.BlackBerry() ||
            isMobile.iOS() || isMobile.Windows())
  }
}

const forceNative = (event) => {
  window.localStorage.setItem('_native', 1)
  window.location = '/'
}

export default class NotNative extends Component {
  render () {
    const isAndroid = isMobile.Android()

    const cls = classname('NotNative', {
      'NotNative--topRight': isAndroid
    })
    return <div className={cls}>
      <Header />
      <button className='NotNative-noThanks' onClick={forceNative}>
        {isAndroid && 'Jeg har allerede gjort dette' || 'Bare giv mig app\'en'}
        <svg width='30px' height='29px' viewBox='0 0 30 29'>
          <g transform='translate(-325.000000, -74.000000)'>
            <g transform='translate(325.000000, 74.000000)'>
              <rect id='Rectangle-1642' fill='#F0E7CE' x='0' y='0' width='30' height='29' rx='2'></rect>
              <path d='M13.1213203,14.2426407 L9.93933983,11.0606602 C9.35355339,10.4748737 9.35355339,9.52512627 9.93933983,8.93933983 C10.5251263,8.35355339 11.4748737,8.35355339 12.0606602,8.93933983 L15.2426407,12.1213203 L18.4246212,8.93933983 C19.0104076,8.35355339 19.9601551,8.35355339 20.5459415,8.93933983 C21.131728,9.52512627 21.131728,10.4748737 20.5459415,11.0606602 L17.363961,14.2426407 L20.5459415,17.4246212 C21.131728,18.0104076 21.131728,18.9601551 20.5459415,19.5459415 C19.9601551,20.131728 19.0104076,20.131728 18.4246212,19.5459415 L15.2426407,16.363961 L12.0606602,19.5459415 C11.4748737,20.131728 10.5251263,20.131728 9.93933983,19.5459415 C9.35355339,18.9601551 9.35355339,18.0104076 9.93933983,17.4246212 L13.1213203,14.2426407 Z' id='Combined-Shape' fill='#A19D8C'></path>
            </g>
          </g>
        </svg>
      </button>
      <div className='NotNative-addToHomescreen'>
        <p>Tryk på <em></em> og tilføj <strong>Fuglefinder</strong> til din hjemmeskærm</p>
        <svg width='29px' height='12px' viewBox='0 0 29 12'>
          <g transform='translate(-173.000000, -560.000000)' fill='#304461'>
            <path d='M173,560 L202,560 L189.038026,570.727151 C188.188598,571.430126 186.81039,571.429288 185.961974,570.727151 L173,560 Z'></path>
          </g>
        </svg>
      </div>
    </div>
  }
}

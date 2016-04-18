import React, { Component } from 'react'

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

const notice = {
  position: 'fixed',
  bottom: '10px',
  left: '25%',
  right: '25%',
  padding: '15px',
  background: 'linear-gradient(lightblue, green)',
  color: 'yellow',
  textAlign: 'center',
  borderRadius: '25px',
  zIndex: 1000
}

const forceNative = (event) => {
  window.localStorage.setItem('_native', 1)
  window.location = '/'
}

export default class NotNative extends Component {
  render () {
    return <div style={{padding: '10px'}}>
      <img src='/apple-touch-icon.png' style={{width: '100%'}} />
      <button onClick={forceNative}>Bare giv mig app'en</button>

      <div style={notice}>
        Klik her og på <strong>Tilføj til hjemmeskærm</strong>
        <br />
        ||<br />
        ▼
      </div>
    </div>
  }
}

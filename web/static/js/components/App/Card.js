import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import Rating from './Rating'
import classname from 'classname'
import './Card.css'

export default function Card ({ bird, fitForModal, found, onFoundClick, onShareClick }) {
  const cls = classname('Card', {
    'Card--fitForModal': fitForModal,
    'Card--found': found
  })

  return <div className={cls}>
    <div className='Card-inner'>
      <Header bird={bird} />
      <Image bird={bird} showControls={false} />
      <Description bird={bird} />
      <Footer
        onFoundClick={onFoundClick}
        onShareClick={onShareClick}
        found={found}
      />
    </div>
  </div>
}

Card.propTypes = {
  bird: PropTypes.object.isRequired,
  fitForModal: PropTypes.bool.isRequired,
  found: PropTypes.bool.isRequired,
  onFoundClick: PropTypes.func.isRequired,
  onShareClick: PropTypes.func.isRequired
}

export function Header ({ bird }) {
  const { name, rarity } = bird

  return <header className='Card-header'>
    <h1>{name}</h1>
    <Rating rating={rarity} title='Ret sjælden' />
    <button className='Card-close'>
      <svg width='12px' height='12px' viewBox='0 0 12 12'>
        <path d='M4.12132034,6.24264069 L0.939339828,3.06066017 C0.353553391,2.47487373 0.353553391,1.52512627 0.939339828,0.939339828 C1.52512627,0.353553391 2.47487373,0.353553391 3.06066017,0.939339828 L6.24264069,4.12132034 L9.4246212,0.939339828 C10.0104076,0.353553391 10.9601551,0.353553391 11.5459415,0.939339828 C12.131728,1.52512627 12.131728,2.47487373 11.5459415,3.06066017 L8.36396103,6.24264069 L11.5459415,9.4246212 C12.131728,10.0104076 12.131728,10.9601551 11.5459415,11.5459415 C10.9601551,12.131728 10.0104076,12.131728 9.4246212,11.5459415 L6.24264069,8.36396103 L3.06066017,11.5459415 C2.47487373,12.131728 1.52512627,12.131728 0.939339828,11.5459415 C0.353553391,10.9601551 0.353553391,10.0104076 0.939339828,9.4246212 L4.12132034,6.24264069 Z'></path>
      </svg>
    </button>
  </header>
}

export function Image ({ bird, showControls }) {
  return <div className='Card-image'>
    <img src={bird.picture.single} />
    {showControls && (
      <div className='Card-nextPrev'>
        <Link to='/' className='Card-nextPrevLink'>
          <svg width='14px' height='54px' viewBox='0 0 14 54'>
            <path d='M14,27 L14,19.3296178 C14,8.04782265 0,7.49132661 0,0 L0,27 L0,54 C0,46.5086734 14,45.9521774 14,34.6703822 L14,27 Z' fill='#FEFBEE'></path>
            <path d='M2.2472789,28.4602702 L5.42869679,32.4370426 C5.94621111,33.0839355 6.89014967,33.1888175 7.53704257,32.6713032 C8.18393547,32.1537889 8.28881754,31.2098503 7.77130321,30.5629574 L5.32093727,27.5 L7.77130321,24.4370426 C8.28881754,23.7901497 8.18393547,22.8462111 7.53704257,22.3286968 C6.89014967,21.8111825 5.94621111,21.9160645 5.42869679,22.5629574 L2.2472789,26.5397298 C2.01288812,26.8204963 1.89458775,27.1720595 1.90013094,27.5246409 C1.90762956,27.8654987 2.02547639,28.1945826 2.2472789,28.4602702 Z' fill='#002A3F'></path>
          </svg>
        </Link>
        <Link to='/' className='Card-nextPrevLink'>
          <svg width='14px' height='54px' viewBox='0 0 14 54'>
            <path d='M14,27 L14,19.3296178 C14,8.04782265 0,7.49132661 0,0 L0,27 L0,54 C0,46.5086734 14,45.9521774 14,34.6703822 L14,27 Z' fill='#FEFBEE'></path>
            <path d='M2.2472789,28.4602702 L5.42869679,32.4370426 C5.94621111,33.0839355 6.89014967,33.1888175 7.53704257,32.6713032 C8.18393547,32.1537889 8.28881754,31.2098503 7.77130321,30.5629574 L5.32093727,27.5 L7.77130321,24.4370426 C8.28881754,23.7901497 8.18393547,22.8462111 7.53704257,22.3286968 C6.89014967,21.8111825 5.94621111,21.9160645 5.42869679,22.5629574 L2.2472789,26.5397298 C2.01288812,26.8204963 1.89458775,27.1720595 1.90013094,27.5246409 C1.90762956,27.8654987 2.02547639,28.1945826 2.2472789,28.4602702 Z' fill='#002A3F'></path>
          </svg>
        </Link>
      </div>
    )}
  </div>
}

export function Description ({ bird }) {
  return <div className='Card-description'>
    <p className='Card-description-primary'>{bird.fact}</p>
    &nbsp;
    <p className='Card-description-secondary'>
      Latinsk navn: {bird.latin_name}. Engelsk navn: {bird.english_name}.
    </p>
  </div>
}

export function Footer ({ found, onFoundClick, onShareClick }) {
  return <footer className='Card-footer'>
    <button className='Card-found' onClick={onFoundClick}>
      Den har jeg set!
    </button>
    <button className='Card-share' onClick={onShareClick}>
      Del dit fund
    </button>
  </footer>
}

Card.propTypes = {
  bird: PropTypes.object.isRequired,
  fitForModal: PropTypes.bool,
  found: PropTypes.bool
}

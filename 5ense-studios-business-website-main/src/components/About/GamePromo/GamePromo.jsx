import React from 'react'
import { useNavigate } from 'react-router-dom'
import PaperTexture from '../../../assets/images/Texture/Paper.jpg'

const GamePromo = () => {
  const navigate = useNavigate()

  return (
    <section className='game-promo site-gutter'>
      <img src={PaperTexture} alt='' className='texture-layer texture-layer--paper' />
      <div className='tone-layer tone-layer--dark' />
      <div className='game-promo__content'>
        <h2 className='game-promo__headline'>
          <span className='game-promo__label'>
            Immerse yourself with our latest:{' '}
          </span>
          <span className='game-promo__title'>
            THE FRIEND
          </span>
        </h2>

        <p className='game-promo__copy'>
          One accidental crime and a circle of friends. In this immersive experience,
          cross-examine a cold case involving four friends and uncover the real truth
          in their stories.
        </p>

        <button
          onClick={() => navigate('/friend')}
          className='btn btn--solid'
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default GamePromo;

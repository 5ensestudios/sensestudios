import React from 'react'
import { useNavigate } from 'react-router-dom'
import GrungeTexture from '../../../assets/images/Texture/Paper.jpg'
const demoPoster = '/FRIEND POSTER - DEMO.png'
const finalPoster = '/FRIEND Poster.png'

const Game = () => {
  const navigate = useNavigate()
  return (
    <section className='friend-game site-gutter'>
      <img src={GrungeTexture} alt='' className='texture-layer texture-layer--grunge' />
      <div className='tone-layer tone-layer--dark' />
      <div className='friend-game__content'>
        <h1 className='friend-game__title'>
          Ready to take on the case?
        </h1>

        <div className='friend-game__panel'>
          <div className='friend-game__card'>
            <img 
              src={demoPoster} 
              alt="" 
              className='friend-game__poster'
            />
            <p className='friend-game__description'>
              Try out the demo and get a taste of the narrative and characters! 
              Who knows, you might just want the entire version.
            </p>
            <button onClick={() => navigate('/account')} className='btn btn--teal'>
              Try The Demo
            </button>
          </div>

          <div className='friend-game__card'>
            <img 
              src={finalPoster} 
              alt="" 
              className='friend-game__poster'
            />
            <p className='friend-game__description'>
              Try out the demo and get a taste of the narrative and characters! 
              Who knows, you might just want the entire version.
            </p>
            <button onClick={() => navigate('/account')} className='btn btn--teal'>
              Try The Demo
            </button>
          </div>
        </div>

        <h2 className='friend-game__future'>
          More downloadable content to come in the future...
        </h2>
      </div>
    </section>
  );
};

export default Game;
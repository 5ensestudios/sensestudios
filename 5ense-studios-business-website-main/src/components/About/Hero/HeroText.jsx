import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeroText = () => {
  const navigate = useNavigate()

  return (
    <section className='hero site-gutter'>
      <h1 className='hero__title'>THE FRIEND</h1>

      <div className='hero__actions'>
        <button
          onClick={() => navigate('/friend')}
          className='btn btn--solid'
        >
          Sneak Peek
        </button>

        <button
          onClick={() => navigate('/friend')}
          className='btn btn--outline'
        >
          Learn More
        </button>
      </div>
    </section>
  );
};

export default HeroText;
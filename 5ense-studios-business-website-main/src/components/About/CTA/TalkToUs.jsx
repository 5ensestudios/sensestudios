import React from 'react'
import PaperTexture from '../../../assets/images/Texture/Paper.jpg'

const TalkToUs = () => {
  return (
    <section className='cta-section'>
      <img src={PaperTexture} alt='' className='texture-layer texture-layer--paper' />
      <div className='tone-layer tone-layer--dark' />
      <div className='cta-section__panel'>
        <p className='cta-section__eyebrow'>
          Want to work with us?
        </p>
        <h1 className='cta-section__title'>
          Talk to us!
        </h1>
      </div>
    </section>
  );
};

export default TalkToUs;

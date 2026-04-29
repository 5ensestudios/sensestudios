import React from 'react'
import PaperTexture from '../../../assets/images/Texture/Paper.jpg'

const AboutContent = () => {
  return (
    <section id='about-content' className='about-section site-gutter'>
      <img src={PaperTexture} alt='' className='texture-layer texture-layer--paper' />
      <div className='tone-layer tone-layer--dark' />
      <div className='about-section__content'>
        <h2 className='about-section__eyebrow'>
          Experience real games with
        </h2>

        <h1 className='about-section__title'>
          5ENSE STUDIOS.
        </h1>

        <p className='about-section__copy'>
          A collective of unique individuals, 5ENSE STUDIOS merges different talents across
          film, music, and design to enhance how{' '}
          <span className='about-section__highlight'>you</span> navigate digital experiences.
        </p>

        <div className='about-section__arrow'>
          <svg fill='none' stroke='currentColor' viewBox='0 0 24 24'>
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
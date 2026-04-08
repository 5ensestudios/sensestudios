import React from 'react'
import { useNavigate } from 'react-router-dom'
import PaperTexture from '../../../assets/images/Texture/Paper.jpg'

const GamePromo = () => {
  const navigate = useNavigate()

  return (
    <div className='relative bg-[#1a1a1c] min-h-screen flex items-center px-6 md:px-45 pt-20 md:pt-40 pb-20 md:pb-60 overflow-hidden'>
      <img src={PaperTexture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.80] pointer-events-none" />
      <div className="absolute inset-0 bg-[#1a1a1c] opacity-70"></div>
      <div className='relative z-10 w-full'>

        {/* Header */}
        <h2 className='mb-6'>
          <span className='font-spartan font-bold text-white text-2xl md:text-4xl tracking-[-0.063em]'>
            Immerse yourself with our latest:{' '}
          </span>
          <span
            className='the-friend-title block md:inline-block text-[#f16d18] font-black uppercase text-[60px] md:text-[90px]'
            style={{ letterSpacing: '0.063em' }}
          >
            THE FRIEND
          </span>
        </h2>

        {/* Description */}
        <p className='text-white text-base md:text-2xl leading-relaxed mb-4 md:mb-10 text-justify tracking-[-0.043em]'>
          One accidental crime and a circle of friends. In this immersive experience,
          cross-examine a cold case involving four friends and uncover the real truth
          in their stories.
        </p>

        {/* CTA */}
        <button
          onClick={() => navigate('/friend')}
          className='bg-[#f16d18] text-white text-xs md:text-sm tracking-widest uppercase px-5 py-1.5 md:px-10 md:py-2 rounded-full hover:bg-[#d45e10] transition duration-200'
        >
          Learn More
        </button>
      </div>
    </div>
  )
}

export default GamePromo

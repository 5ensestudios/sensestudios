import React from 'react'
import { useNavigate } from 'react-router-dom'
import PaperTexture from '../../../assets/images/Texture/Paper.jpg'

const GamePromo = () => {
  const navigate = useNavigate()

  return (
    <div className='relative bg-[#1a1a1c] min-h-screen flex items-center px-6 md:px-45 overflow-hidden'>
      <img src={PaperTexture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.80] pointer-events-none" />
      <div className="absolute inset-0 bg-[#1a1a1c] opacity-70"></div>
      <div className='relative z-10 w-full'>

        {/* Header */}
        <h2 className='mb-8 leading-snug'>
          <span className='text-white text-2xl md:text-5xl font-medium'>
            Immerse yourself with our latest:{' '}
          </span>
          <span
            className='the-friend-title text-[#f16d18] font-black uppercase text-4xl md:text-7xl'
            style={{ letterSpacing: '0.04em' }}
          >
            THE FRIEND
          </span>
        </h2>

        {/* Description */}
        <p className='text-zinc-300 text-lg md:text-2xl leading-relaxed mb-10 text-justify'>
          One accidental crime and a circle of friends. In this immersive experience,
          cross-examine a cold case involving four friends and uncover the real truth
          in their stories.
        </p>

        {/* CTA */}
        <button
          onClick={() => navigate('/friend')}
          className='bg-[#f16d18] text-white text-sm font-semibold tracking-widest uppercase px-20 py-3 rounded-full hover:bg-[#d45e10] transition duration-200'
        >
          Learn More
        </button>
      </div>
    </div>
  )
}

export default GamePromo

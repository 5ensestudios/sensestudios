import React from 'react'
import { useNavigate } from 'react-router-dom'
import PaperTexture from '../../../assets/images/Texture/Paper.jpg'

const TalkToUs = () => {
  const navigate = useNavigate()

  return (
    // 1. Removed px-45 to allow content to hit the edges
    <div className='relative bg-[#1a1a1c] py-24 md flex items-center justify-center overflow-hidden'>
      <img src={PaperTexture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.80] pointer-events-none" />
      <div className="absolute inset-0 bg-[#1a1a1c] opacity-70"></div>
      
      <div
        // 2. Removed rounded-[4rem], hover:brightness-110, and transition
        className='relative z-10 w-full bg-[#f16d18] flex flex-col items-center justify-center py-30 px-10 text-center cursor-pointer'
    
      >
        <p className='text-white text-3xl md:text-5xl mb-1 tracking-[-0.063em]'>
          Want to work with us?
        </p>
        <h1 className='text-white text-[80px] md:text-9xl tracking-[-0.063em] whitespace-nowrap'>
          Talk to us!
        </h1>
      </div>
    </div>
  )
}


export default TalkToUs

import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeroText = () => {
  const navigate = useNavigate()

  const scrollToContent = () => {
    document.getElementById('about-content')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className='min-h-screen flex flex-col justify-end pb-24 px-6 md:px-45 gap-5 text-white'>
      <h1 className='the-friend-title text-5xl md:text-8xl font-bold tracking-tight leading-none' style={{ letterSpacing: "0.05em" }}>THE FRIEND</h1>

      <div className="flex gap-4">
        <button
          onClick={() => navigate('/friend')}
          className='bg-[#f16d18] px-6 py-2 rounded-full text-sm font-glacial tracking-wide hover:bg-[#d45e10] transition duration-200 cursor-pointer uppercase'>
          Sneak Peek
        </button>

        <button
          onClick={scrollToContent}
          className='border border-white px-6 py-2 rounded-full uppercase text-sm font-glacial tracking-wide hover:bg-white hover:text-black transition duration-200 cursor-pointer'>
          Learn More
        </button>
      </div>
    </div>
  )
}

export default HeroText
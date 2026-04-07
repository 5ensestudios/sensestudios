import React from 'react'
import PaperTexture from '../../../assets/images/Texture/Paper.jpg'

const AboutContent = () => {
  return (
    <div id="about-content" className="relative flex items-center bg-[#1F2021] px-6 md:px-45 pt-50 pb-35 overflow-hidden">
      <img src={PaperTexture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.80] pointer-events-none" />
      <div className="absolute inset-0 bg-[#1a1a1c] opacity-70"></div>
      <div className="w-full relative z-10">
        <h2 className="text-2xl md:text-5xl font-medium text-white mb-4">
          Experience real games with
        </h2>

        <h1 className="text-5xl md:text-8xl font-extrabold text-[#f16d18] mb-6">
          5ENSE STUDIOS.
        </h1>

        <p className="text-white text-lg md:text-2xl leading-relaxed text-justify mb-30">
          A collective of unique individuals, 5ENSE STUDIOS merges different talents across
          film, music, and design to enhance how{" "}
          <span className="text-[#f16d18] italic">you</span> navigate digital experiences.
        </p>

        <svg className="w-8 h-8 text-white animate-bounce mx-auto block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </div>
  )
}

export default AboutContent
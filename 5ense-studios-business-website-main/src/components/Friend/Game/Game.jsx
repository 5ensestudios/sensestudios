import React from 'react'
import { useNavigate } from 'react-router-dom'
import GrungeTexture from '../../../assets/images/Texture/Grunge.jpg'
const demoPoster = '/FRIEND POSTER - DEMO.png'
const finalPoster = '/FRIEND Poster.png'

const Game = () => {
  const navigate = useNavigate()
  return (
    <div className='relative min-h-screen bg-[#1F1F21] flex items-center justify-center px-6 overflow-hidden'>
      <img src={GrungeTexture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.50] pointer-events-none" />
      <div className="absolute inset-0 bg-[#1a1a1c] opacity-50"></div>
      <div className='w-full max-w-5xl flex flex-col items-center text-center relative z-10'>
        
        <h1 className='text-3xl md:text-5xl text-white font-bold mb-10'>
          Ready to take on the case?
        </h1>

        <div className='bg-[#111113] rounded-3xl p-6 md:p-12 w-full flex flex-col md:flex-row gap-8 md:gap-12 justify-center items-center'>
          
          {/* Card 1 - Demo */}
          <div className='flex flex-col items-center text-center flex-1'>
            <img 
              src={demoPoster} 
              alt="" 
              className='w-60 h-80 object-cover bg-gray-500 mb-6 rounded-xl'
            />
            <p className='text-white mb-4 max-w-60 text-left'>
              Try out the demo and get a taste of the narrative and characters! 
              Who knows, you might just want the entire version.
            </p>
            <button onClick={() => navigate('/account')} className="bg-[#2f4b4b] w-60 py-2 rounded-full text-white text-sm font-medium 
              hover:bg-[#3f6b6b] transition duration-300 uppercase">
              Try The Demo
            </button>
          </div>

          {/* Card 2 - Final */}
          <div className='flex flex-col items-center text-center flex-1'>
            <img 
              src={finalPoster} 
              alt="" 
              className='w-60 h-80 object-cover bg-gray-500 mb-6 rounded-xl'
            />
            <p className='text-white mb-4 max-w-60 text-left'>
              Try out the demo and get a taste of the narrative and characters! 
              Who knows, you might just want the entire version.
            </p>
            <button onClick={() => navigate('/account')} className=" bg-[#2f4b4b] w-60 py-2 rounded-full  text-white  text-sm font-medium 
              hover:bg-[#3f6b6b] transition duration-300 uppercase">
              Try The Demo
            </button>
          </div>

        </div>

        <h3 className='text-2xl md:text-4xl text-white font-light mt-10 text-center py-10'>
          More downloadable content to come in the future...
        </h3>

      </div>
    </div>
  )
}

export default Game
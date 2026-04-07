import React, { useState } from 'react'
import GrungeTexture from '../../../assets/images/Texture/Grunge.jpg'

const faqs = [
  {
    question: 'What is THE FRIEND?',
    answer: 'THE FRIEND is an interactive FMV (Full Motion Video) detective game where players uncover the truth by watching clips, analyzing clues, and making choices that influence how the story unfolds.',
  },
  {
    question: 'How do I play the game?',
    answer: 'Players explore the story through video clips, dialogue, and interactive elements on the website. By paying attention to details and clues, you can piece together the mystery and progress through the narrative.',
  },
  {
    question: 'Do I need to download anything to play?',
    answer: 'No downloads are required. THE FRIEND is a browser-based game, meaning you can play it directly on the website from your computer or device.',
  },
]

const FAQItem = ({ question, answer }) => {
  const [open, setOpen] = useState(false)

  return (
    <div className='border-b border-white/20'>
      <button
        className='w-full flex items-center justify-between py-5 text-left text-white text-sm md:text-base tracking-wide hover:opacity-70 transition duration-200'
        onClick={() => setOpen(!open)}
      >
        <span>{question}</span>
        <svg
          className={`w-5 h-5 shrink-0 ml-4 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          viewBox='0 0 24 24'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
        </svg>
      </button>

      {open && (
        <p className='text-zinc-400 text-sm leading-relaxed pb-5'>
          {answer}
        </p>
      )}
    </div>
  )
}

const FAQ = () => {
  return (
    <div className='relative bg-[#1F1F21] py-24 px-6 md:px-45 overflow-hidden'>
      <img src={GrungeTexture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.50] pointer-events-none" />
      <div className="absolute inset-0 bg-[#1F1F21] opacity-50"></div>
      <div className='w-full relative z-10'>

        {/* Header */}
        <h2 className='text-white text-3xl md:text-4xl font-bold text-center mb-2 tracking-tight'>
          Gameplay &amp; Support
        </h2>
        <div className='w-full border-t border-white/20 mt-6 mb-2'></div>

        {/* FAQ Items */}
        <div className='w-full'>
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default FAQ

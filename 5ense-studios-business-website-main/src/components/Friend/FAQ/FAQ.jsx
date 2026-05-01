import React, { useState } from 'react'
import GrungeTexture from '../../../assets/images/Texture/Paper.jpg'

const faqs = [
  {
    question: 'What is THE FRIEND?',
    answer: 'THE FRIEND is an interactive FMV (Full Motion Video) game where players investigate a 2016 cold case by watching recovered clips and navigating conflicting stories to find out what happened.',
  },
  {
    question: 'How do I play the game?',
    answer: 'The game plays out like a simulated computer desktop right in your browser. You will manually open folders and files to review video footage. As you progress, your access becomes restricted, forcing you to choose how to continue the story.',
  },
  {
    question: 'Do I need to download anything to play?',
    answer: 'No downloads are required. THE FRIEND is a browser-based game, meaning you can play it directly from 5ENSE website. it is best experienced on PC or Laptop for full immersion.',
  },
  {
    question: 'How long is the game?',
    answer: 'A standard playthrough takes 20-30 mins, though it can take longer if you really dive into the immersion and explore everything on the desktop.',
  },
  {
    question: 'Is this a true story?',
    answer: 'No. While it is designed to feel like a real "true crime" rabbit hole, the story is entirely fictional.',
  },
  {
    question: 'How can i provide feedback?',
    answer: 'Your feedback is incredibly valuable as we prepare to launch our offical beta testing phase soon. You can share your thoughts, report any issues, or tell us your theories through this account, our website, or our email at 5ense.studios2026@gmail.com',
  },
  {
    question: 'Who is Brunson?',
    answer: 'Well... you\'d have to play the game to find out!',
  }
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

      {/* Smooth expand/collapse animation */}
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}
      >
        <p className='text-white text-sm leading-relaxed pb-5'>
          {answer}
        </p>
      </div>
    </div>
  )
}

const FAQ = () => {
  return (
    <div className='relative bg-[#1F1F21] py-35 px-6 md:px-45 overflow-hidden'>
      <img src={GrungeTexture} alt="" className="absolute inset-0 w-full h-full object-cover opacity-[0.50] pointer-events-none" />
      <div className="absolute inset-0 bg-[#1a1a1c] opacity-70"></div>
      <div className='w-full relative z-10'>

        {/* Header */}
        <h1 className='text-white text-3xl md:text-[60px] text-center mb-2 tracking-[-0.063em]'>
          Gameplay &amp; Support
        </h1>
        <div className='w-full border-t border-white/20 mt-6 mb-2'></div>

        {/* FAQ Items */}
        <div className='font-glacial w-full text-2xl md:text-[18px] tracking-[-0.043em]'>
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>

      </div>
    </div>
  )
}

export default FAQ

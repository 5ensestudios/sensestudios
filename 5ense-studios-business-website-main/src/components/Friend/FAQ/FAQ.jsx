import React, { useState } from 'react'
import GrungeTexture from '../../../assets/images/Texture/Paper.jpg'

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
    <div className='faq-item'>
      <button
        className='faq-item__trigger'
        onClick={() => setOpen(!open)}
      >
        <span className='faq-item__question'>{question}</span>
        <svg
          className={`faq-item__icon ${open ? 'faq-item__icon--open' : ''}`}
          fill='none'
          stroke='currentColor'
          strokeWidth='2'
          viewBox='0 0 24 24'
        >
          <path strokeLinecap='round' strokeLinejoin='round' d='M19 9l-7 7-7-7' />
        </svg>
      </button>

      <div
        className={`faq-item__answer-wrap ${open ? 'faq-item__answer-wrap--open' : ''}`}
      >
        <p className='faq-item__answer'>
          {answer}
        </p>
      </div>
    </div>
  )
}

const FAQ = () => {
  return (
    <section className='faq-section site-gutter'>
      <img src={GrungeTexture} alt='' className='texture-layer texture-layer--grunge' />
      <div className='tone-layer tone-layer--dark' />
      <div className='faq-section__content'>
        <h1 className='faq-section__heading'>
          Gameplay &amp; Support
        </h1>
        <div className='faq-section__divider'></div>

        <div className='faq-section__list'>
          {faqs.map((faq, i) => (
            <FAQItem key={i} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
